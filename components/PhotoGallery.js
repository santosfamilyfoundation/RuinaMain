import React, { Component } from 'react';
import { TextInput, StyleSheet, View, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { Button, TopNavigation, Text, Card, CardHeader, Layout, Icon } from '@ui-kitten/components';
import { styles } from './PhotoGallery.style';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

class PhotoGallery extends Component {

    render(){
        const { photos, navigation } = this.props;

        //Move to photo capture component
        const navigatePhotos = () => {
            navigation.navigate('PhotoCapture')
        }

        const allPhotos = [];
        let index = 0;

        //For each tag in the current photo reducer, make a card for each image
        for (let [tag, imagesArray] of Object.entries(photos.images)) {
          imagesArray.forEach(elm => {
            index+=1
            console.log(elm)
            allPhotos.push(
              <Card key={index} style={styles.itemCard}>
                  <View style={styles.itemCardContent}>
                      <Image source={{uri:elm}} style={styles.image}/>
                      <Text style={styles.itemCardFooter} category="s1">{tag}</Text>
                  </View>
              </Card>
            )
          })
        }

        const PhotosHeader = () => (
            <CardHeader title="Photo Gallery" />
        );

        return(
            <SafeAreaView style={{flex:1}}>
                <TopNavigation title='Home' style = {{marginBottom: 15}}alignment='center' leftControl={this.props.BackAction()}/>
                <ScrollView>
                <Card header={PhotosHeader} style={styles.sectionCard}>
                    <Layout style={styles.questionContainer}>
                        {allPhotos}
                        <Card style={styles.itemCard} onPress = {() => navigatePhotos()}>
                            <View style={styles.itemCardContent}>
                                <Icon name='camera-outline' width={75} height={75} />
                                <Text style={styles.itemCardFooter} category="s1">Take Photo</Text>
                            </View>
                        </Card>
                    </Layout>
                </Card>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        photos: state.photosReducer,
    }
}


export default connect(mapStateToProps)(PhotoGallery);
