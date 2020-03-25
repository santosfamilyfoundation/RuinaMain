import React from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import firebase from 'react-native-firebase';
import uuid from 'uuid/v4';

uploadImage = (imgUri, images) => {
  const ext = imgUri.split('.').pop(); // Extract image extension
  const filename = `${uuid()}.${ext}`; // Making a unique name
  firebase //Connect and store in firebase
    .storage()
    .ref(`VINImages/${filename}`)
    .putFile(imgUri)
    .on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      snapshot => {
        if (firebase.storage.TaskState.SUCCESS) {
          const allImages = images;
          allImages.push(snapshot.downloadURL);
          AsyncStorage.setItem('images', JSON.stringify(allImages));
        }
      },
      error => {
        unsubscribe();
        alert('Unable to upload');
      }
    );
};

export default function ScanResult({
  imagePath,
  fullImagePath,
  hasBackButton,
  title = false,
  navigation,
  text
}) {
  let data = [];
  let fullImage = <View />;
  let fullImageText = <View />;

  const fetchVIN = (vin) => {
    fetch("https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/"+vin+"?format=json&modelyear=2011")
      .then(response => response.json())
      .then((responseJson)=> {
        data = responseJson.Results
        console.log(data)
      })
      .catch(error=>console.log(error))
  }

  const uploadImage = (imgUri, images) => {
    const ext = imgUri.split('.').pop(); // Extract image extension
    const filename = `${uuid()}.${ext}`; // Making a unique name
    firebase //Connect and store in firebase
      .storage()
      .ref(`VINImages/${filename}`)
      .putFile(imgUri)
      .on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        snapshot => {
          if (firebase.storage.TaskState.SUCCESS) {
            const allImages = images;
            allImages.push(snapshot.downloadURL);
            AsyncStorage.setItem('images', JSON.stringify(allImages));
          }
        },
        error => {
          unsubscribe();
          alert('Unable to upload');
        }
      );
  }


  console.log(text);
  fetchVIN(text);

  if (fullImagePath && fullImagePath !== '') {
    fullImage = (
      <Image
        style={styles.image}
        resizeMode={'contain'}
        source={{uri: `file://${fullImagePath}`}}
      />
    );
    fullImageText = <Text style={styles.text}>Full Image:</Text>;
  }

  uploadImage(fullImagePath, [fullImagePath]);

  let BackButton = <View />;
  if (hasBackButton) {
    BackButton = (
      <View style={styles.backButton}>
        <Button title={'Back'} onPress={() => navigation.goBack()} />
      </View>
    );
  }
  let Title = <View />;
  if (title) {
    Title = <Text style={styles.titleText}>{title}</Text>;
  }

  return (
    <View style={styles.container}>
      {Title}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {fullImageText}
        {fullImage}

        <Text style={styles.text}>Cutout:</Text>
        <Image
          style={styles.image}
          resizeMode={'contain'}
          source={{uri: `file://${imagePath}`}}
        />
        <Button title={`VIN: ${text}`} onPress={() => navigation.navigate('Vehicle', {VIN: text})}/>
        {BackButton}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    // flex: 1,
    height: 300,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#303030',
    marginBottom: 20,
    marginTop: 50,
  },
  resultContainer: {
    display: 'flex',
    flexDirection: 'row',
    color: 'white',
    alignContent: 'flex-end',
    marginLeft: '10%',
    marginRight: '10%',
    alignItems: 'baseline',
    flexWrap: 'wrap',
  },
  headline: {
    fontWeight: 'bold',
    color: 'white',
    marginTop: 20,
    fontSize: 15,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    alignContent: 'flex-end',
    justifyContent: 'space-around',
    alignSelf: 'center',
    marginTop: 5,
  },
  textResult: {
    color: 'white',
    alignContent: 'flex-end',
    marginTop: 2,
    marginRight: '10%',
  },
  textResultLabel: {
    color: 'white',
    alignContent: 'flex-end',
    fontWeight: 'bold',
    marginTop: 10,
    marginRight: 20,
  },
  scrollContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'column',
  },

  backButton: {
    marginTop: 25,
    width: '100%',
    alignSelf: 'center',
  },

  titleText: {
    color: '#0099FF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
