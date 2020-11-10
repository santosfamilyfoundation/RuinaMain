import React, {Component} from 'react';
import NetInfo, {NetInfoState} from "@react-native-community/netinfo"
export class NetInfoAPI extends Component {
    constructor(props){
        super(props)
        this.status = null;
    }
    async checkNetOnce() {
        NetInfo.configure({
            reachabilityUrl: 'https://google.com',
            reachabilityTest: async (response) => response.status === 204,
            reachabilityLongTimeout: 60 * 1000, // 60s
            reachabilityShortTimeout: 5 * 1000, // 5s
            reachabilityRequestTimeout: 15 * 1000, // 15s
        });
        let curConnection;
        async function handleConnectivityChange(status){
            try {
                await NetInfo.fetch().then(state => {
                    curConnection= state.isConnected && state.isInternetReachable;
                });
            } catch (e){
                curConnection = false;
            } finally {
                return curConnection;
            }
        }
        let curStatus = await NetInfo.fetch().then(handleConnectivityChange);
        this.status = curStatus;
        return curStatus;
    }

    // Currently unused function
    getNetInfo = () => {
        NetInfo.getConnectionInfo().then((connectionInfo) => {
            console.log(connectionInfo.type  + connectionInfo.effectiveType);
        });

        function handleFirstConnectivityChange(connectionInfo) {
            console.log(+"Connection changed" + connectionInfo.type +  connectionInfo.effectiveType);
            NetInfo.removeEventListener('connectionChange',handleFirstConnectivityChange);
        }
        NetInfo.addEventListener('connectionChange', handleFirstConnectivityChange);
    }
}

export default NetInfoAPI;
