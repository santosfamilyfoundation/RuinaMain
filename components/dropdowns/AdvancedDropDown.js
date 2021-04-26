import React from 'react';
import {
  Layout,
  Select,
  Text,
  Card,
  CardHeader,
  Button,
  Icon
} from '@ui-kitten/components';
import { styles } from './AdvancedDropDown.style';
import { connect } from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import { API_KEY } from '../../utils/WeatherAPIKey';
import * as Constants from '../../constants';

//This component is used for "advanced" tool access with drop downs (weather)

const AdvancedDropDown = (props) => {
    const [selectedOptions, setSelectedOptions] = React.useState([]);
    const [buttonAppearance, setButtonAppearance] = React.useState('outline');
    const [toggleWeatherHelper, setToggleWeatherHelper] = React.useState(false);
    const [advancedButtonAppearance, setAdvancedButtonAppearance] = React.useState('outline');
    const {data, key, id, questionReducer, submitFunction, pageChange, importFrom, updateResponse, dependencyID} = props;
    const [isLoading, setIsLoading] = React.useState(true);
    const [temp, setTemp] = React.useState("");
    const [conditions, setConditions] = React.useState("");
    const [place, setPlace] = React.useState("");
    const [speed, setSpeed] = React.useState("");
    const [degree, setDegree] = React.useState("");

    let currId = data.id;
    const reducerData = questionReducer.data.find(entry => entry.id == id);
    let existingData = !reducerData?.response ? null : reducerData.response;
    let i;
    // Populate if value already exists in redux

    if(selectedOptions.length == 0) {
        if(existingData != null) {
            if(existingData[currId] != null) {
                let currOptions = []
                for (i = 0; i < data.answerOptions.length; i++) {
                    if(existingData[currId].includes(data.answerOptions[i].text)) {
                        currOptions.push(data.answerOptions[i]);
                    };
                };
                if(currOptions.length != 0) {
                    setSelectedOptions(currOptions);
                };
            };
        }
    };


    // Disable/enable if numOptionsAllowed reached
    if(selectedOptions.length == data.numOptionsAllowed) {
        for(i = 0; i < data.answerOptions.length; i++) {
            if(!selectedOptions.includes(data.answerOptions[i])) {
                data.answerOptions[i].disabled = true;
            };
        };
    } else {
        for(i = 0; i < data.answerOptions.length; i++) {
            if(!selectedOptions.includes(data.answerOptions[i])) {
                data.answerOptions[i].disabled = false;
            };
        };
    }

    //Calls weather API
    const findWeatherData = () => {
      Geolocation.getCurrentPosition(
        position => {
          fetchWeather(position.coords.latitude, position.coords.longitude)
        },
        error => alert('Using Default Location', JSON.stringify(error)),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
      );
    };


    const fetchWeather = (lat = 25, lon = 25) => {
        fetch(
          `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
        )
          .then(res => res.json())
          .then(json => {
            setTemp(json.main.temp)
            setConditions(json.weather[0].main)
            setSpeed(json.wind.speed)
            setDegree(json.wind.deg)
            setPlace(json.name)
            setIsLoading(false)
          });

    };

    //Updates color status of card
    const setComplete = () => {
        status = 'success'
        if(buttonAppearance != 'filled') {
            setButtonAppearance('filled');
        };
    }

    const setIncomplete = () => {
        status = 'danger'
        if(buttonAppearance != 'outline') {
            setButtonAppearance('outline');
        };
    };

    // Determine submission status
    let status;
    if(!existingData) {
        setIncomplete();
    } else {
        if(!existingData[currId]) {
            setIncomplete();
        } else {
            let incompleteFlag = false;
            for(i = 0; i < selectedOptions.length; i++) {
                if(!existingData[currId].includes(selectedOptions[i].text)){
                    incompleteFlag = true;
                }
            }
            if (selectedOptions.length < existingData[currId].length) {
                incompleteFlag = true;
            }
            if(incompleteFlag) {
                setIncomplete();
            } else {
                setComplete();
            }
        }
    }

    //Updated reducer
    const submitField = () => {
        if(selectedOptions.length == 0) {
            return;
        }
        let res = [];
        for(i = 0; i < selectedOptions.length; i++) {
            res.push(selectedOptions[i].text);
        }
        submitFunction({id, question: currId, selection: res})
    }

    //Clears selection
    const clearRedux = () => {
        submitFunction({id, question: currId, selection: null})
    }

    const addOption = (options) => {
        if(options.length == 0) {
            clearRedux();
        }
        setSelectedOptions(options);
    }

    const Header = () => (
        <CardHeader title={data.question}/>
      );

    const HelperText = () => {
        if(data?.helperText?.length != 0) {
            return (<Text style={styles.helperText}>{data.helperText}</Text>)
        }
        return null;
    }

    //Icons from Eva Icons: https://akveo.github.io/eva-icons/#/

    const CheckIcon = (style) => (
        <Icon {...style} name='checkmark-outline' />
    );

    const WeatherIcon = (style) => (
        <Icon {...style} name='sun-outline' />
    );

    const onImportWeatherPress = () => {
      //Shows the user weather helper data
      if(!toggleWeatherHelper){
        setToggleWeatherHelper(true);
        setAdvancedButtonAppearance("filled");
      }else{
        setToggleWeatherHelper(false);
        setAdvancedButtonAppearance("outline");
      }
    };

    const RenderHeaderIcon = () => {
        switch(importFrom) {
            case "weather":
                return (
                    <Button style={styles.importButton} appearance={advancedButtonAppearance} icon={WeatherIcon} onPress={()=> onImportWeatherPress() }></Button>
                )
        }
    }

    const CustomCardHeader = () => (
      <CardHeader
          title={data.question}
          accessory={RenderHeaderIcon}
      />
    );

    const WeatherHelper = () => {
      if(toggleWeatherHelper){
        //fetchWeather()
        findWeatherData()
        return(
          isLoading ?
              (<Text>Fetching The Weather</Text>) :
              (
                <Layout style={styles.weatherCard}>
                  <Text style={{margin: 8, fontWeight: 'bold',}}>
                    {Constants.TEMP_ANNOUNCE_NAME} {place}
                  </Text>
                  <Text style={{margin: 8, fontWeight: 'bold',}}>
                    {Constants.TEMP_ANNOUNCE} {temp}
                  </Text>
                  <Text style={{margin: 8, fontWeight: 'bold',}}>
                    {Constants.CONDITIONS_ANNOUNCE} {conditions}
                  </Text>
                  <Text style={{margin: 8, fontWeight: 'bold',}}>
                    {Constants.WIND_SPEED_ANNOUNCE} {speed}
                  </Text>
                  <Text style={{margin: 8, fontWeight: 'bold',}}>
                    {Constants.WIND_DEG_ANNOUNCE} {degree}
                  </Text>
                </Layout>
              )

        );
      }
    };


    return (
        <Layout key={key} style={styles.container}>
            <Card header={CustomCardHeader} status={status}>
                <Layout style={styles.content}>
                    {WeatherHelper()}
                    {HelperText()}
                    <Layout style={styles.input}>
                        <Select
                            style={styles.inputField}
                            data={data.answerOptions}
                            selectedOption={selectedOptions}
                            multiSelect={true}
                            onSelect={addOption}
                        />
                        <Button
                            style={styles.submitButton}
                            appearance={buttonAppearance}
                            size='medium'
                            icon={CheckIcon}
                            onPress={() => submitField()}
                        />
                    </Layout>
                </Layout>
            </Card>
        </Layout>
    );
};

const mapStateToProps = (state, props) => {
    const { story } = state;
    const { reducer } = props;
    const questionReducer = state[reducer];
    return { story, questionReducer }
};

export default connect(mapStateToProps)(AdvancedDropDown);
