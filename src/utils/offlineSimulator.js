import {Component} from 'react';
import SystemSetting from 'react-native-system-setting'

export class offlineSimulator extends Component{
    constructor(props){
        super(props)
        this.status = null;
    }
    disableNet(){
        console.log("DisableNet1");
        SystemSetting.getVolume().then((volume)=>{
        console.log('Current volume is ' + volume);
        });
        console.log(SystemSetting.isWifiEnabled());
        // SystemSetting.isAirplaneEnabled().then((enable)=>{
        //     const state = enable ? 'On' : 'Off';
        //     console.log('Current airplane is ' + state);
        // })
    }
    switchAirplane(){
        SystemSetting.switchAirplane(()=>{
            console.log('switch airplane successfully');
        })
    }
}
export default offlineSimulator;