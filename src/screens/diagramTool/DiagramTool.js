import React, { useRef } from 'react';
import {ScrollView, Dimensions} from 'react-native'
import { SafeAreaView } from 'react-navigation';
import TopNavigation from '../../components/TopNavigation';
import { Button, Text } from 'native-base';
import { Draw, DrawRef } from "@benjeau/react-native-draw";
import { addPhoto } from '../../actions/PhotoAction';
import { connect } from 'react-redux';


const DiagramTool = (props) => {
    const { navigation, addPhoto, photo } = props
    const drawRef = useRef(null);
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height - (Dimensions.get('window').height/4);

    const saveDiagram = async() => {
        const diagram = drawRef.current.getSvg();
        const diagramPaths = drawRef.current.getPaths();
        await addPhoto({image:diagram, paths: diagramPaths});
        navigation.navigate('Home');
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
          <TopNavigation title='Crash Diagram' backButton navigation={navigation} />
            <ScrollView>
                <Draw
                  ref={drawRef}
                  height={windowHeight}
                  width={windowWidth}
                  initialValues={{
                    color: "black",
                    thickness: 3,
                    paths: photo.paths ||[]
                  }}
                  autoDismissColorPicker
                  brushPreview="none"
                  canvasStyle={{ elevation: 0 }}
                />
            </ScrollView>
            <Button onPress={() => saveDiagram()}>Save Diagram</Button>
        </SafeAreaView>
        );
};

const mapDispatchToProps = {
    addPhoto,
};

const mapStateToProps = (state) => {
    return {
        photo: state.photosReducer,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiagramTool);
