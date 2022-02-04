import React, { useRef } from 'react';
import {ScrollView} from 'react-native'
import { SafeAreaView } from 'react-navigation';
import TopNavigation from '../../components/TopNavigation';
import { Button, Text } from 'native-base';
import { Draw, DrawRef } from "@benjeau/react-native-draw";
import { addPhoto } from '../../actions/PhotoAction';
import { connect } from 'react-redux';


const DiagramTool = (props) => {
    const { navigation, addPhoto } = props
//    state = {
//        content: '',
//    }

    const drawRef = useRef(null);

//      const removeLastPath = () => {
//        drawRef.current.?undo();
//      }
//
//      const clearDrawing = () =>  {
//        drawRef.current.?clear();
//      }
    const saveDiagram = () => {
        const diagram = drawRef.current.getSvg();
        console.log(diagram);
        addPhoto(str(diagram));
        navigation.navigate('Home');
    };


    return (
        <SafeAreaView style={{ flex: 1 }}>
          <TopNavigation title='Crash Diagram' backButton navigation={navigation} />
            <ScrollView>
                <Draw
                  ref={drawRef}
                  height={675}
                  width={600}
                  initialValues={{
                    color: "black",
                    thickness: 3,
                    paths: []
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
