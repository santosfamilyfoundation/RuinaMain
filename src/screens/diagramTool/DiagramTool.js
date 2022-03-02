import React, { useRef, useState } from 'react';
import {ScrollView, Dimensions, View, Animated } from 'react-native'
import { SafeAreaView } from 'react-navigation';
import TopNavigation from '../../components/TopNavigation';
import { Button, Text, AlertDialog } from 'native-base';
import { Canvas, DrawingTool } from "@benjeau/react-native-draw";
import { CanvasControls, BrushProperties, DEFAULT_COLORS } from "@benjeau/react-native-draw-extras";
import { addPhoto } from '../../actions/PhotoAction';
import { connect } from 'react-redux';

const DiagramTool = (props) => {
    const { navigation, addPhoto, photo } = props
    const drawRef = useRef(null);
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height - (Dimensions.get('window').height/4);

    const [color, setColor] = useState(DEFAULT_COLORS[1][0][0]);
    const [thickness, setThickness] = useState(5);
    const [opacity, setOpacity] = useState(1);
    const [tool, setTool] = useState(DrawingTool.Brush);
    const [visibleBrushProperties, setVisibleBrushProperties] = useState(false);
    const [alert, setAlert] = useState(false);

    const handleClose = () => {
        setAlert(false)
    }

    const handleUndo = () => {
     drawRef.current.undo();
    };

    const handleClear = () => {
        if (!alert) {
            setAlert(true)
        } else {
            drawRef.current.clear();
            setAlert(false);
        }
    };

    const handleToggleEraser = () => {
     setTool((prev) =>
       prev === DrawingTool.Brush ? DrawingTool.Eraser : DrawingTool.Brush
     );
    };

    const [overlayOpacity] = useState(new Animated.Value(0));
    const handleToggleBrushProperties = () => {
     if (!visibleBrushProperties) {
       setVisibleBrushProperties(true);

       Animated.timing(overlayOpacity, {
         toValue: 1,
         duration: 200,
         useNativeDriver: true,
       }).start();
     } else {
       Animated.timing(overlayOpacity, {
         toValue: 0,
         duration: 200,
         useNativeDriver: true,
       }).start(() => {
         setVisibleBrushProperties(false);
       });
     }
    }

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
                <Canvas
                 ref={drawRef}
                 height={windowHeight}
                 color={color}
                 thickness={thickness}
                 opacity={opacity}
                 tool={tool}
                 initialPaths={photo.paths || []}
                />
               <View>
                 <CanvasControls
                   onUndo={handleUndo}
                   onClear={handleClear}
                   onToggleEraser={handleToggleEraser}
                   onToggleBrushProperties={handleToggleBrushProperties}
                   tool={tool}
                   color={color}
                   opacity={opacity}
                   thickness={thickness}
                 />
                 {visibleBrushProperties && (
                   <BrushProperties
                     color={color}
                     thickness={thickness}
                     opacity={opacity}
                     onColorChange={setColor}
                     onThicknessChange={setThickness}
                     onOpacityChange={setOpacity}
                     //@ts-ignore
                     style={{
                       position: 'absolute',
                       bottom: 80,
                       left: 0,
                       right: 0,
                       padding: 10,
                       backgroundColor: 'white',
                       borderTopEndRadius: 10,
                       borderTopStartRadius: 10,
                       borderBottomWidth: 0,
                       borderTopColor: '#ccc',
                       opacity: overlayOpacity,
                     }}
                   />
                 )}
               </View>
               <AlertDialog isOpen={alert} onClose={handleClose}>
                    <AlertDialog.Content>
                        <AlertDialog.CloseButton />
                        <AlertDialog.Header>Delete Crash Diagram</AlertDialog.Header>
                        <AlertDialog.Body>
                            This will delete the entire diagram. This action cannot be reversed.
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button.Group space={2}>
                                <Button colorScheme='coolGray' onPress={handleClose}>Cancel</Button>
                                <Button colorScheme='danger' onPress={handleClear}>Delete</Button>
                            </Button.Group>
                        </AlertDialog.Footer>
                    </AlertDialog.Content>
               </AlertDialog>
            </ScrollView>
            <Button m={4} onPress={() => saveDiagram()}>Save Diagram</Button>
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
