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

const AdvancedDropDown = (props) => {
    const [selectedOptions, setSelectedOptions] = React.useState([]);
    const [buttonAppearance, setButtonAppearance] = React.useState('outline');
    const [toggleWeatherHelper, setToggleWeatherHelper] = React.useState(false);
    const [advancedButtonAppearance, setAdvancedButtonAppearance] = React.useState('outline');
    const {data, key, id, questionReducer, submitFunction, pageChange, importFrom} = props;
    const [isLoading, setIsLoading] = React.useState(true);
    const [temp, setTemp] = React.useState("");
    const [conditions, setConditions] = React.useState("");

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
                    if(existingData[currId].includes(data.answerOptions[i].idCode)) {
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

    const setComplete = () => {
        status = 'success'
        if(buttonAppearance != 'filled') {
            setButtonAppearance('filled');
        };
    }

    const findWeatherData = () => {
        Geolocation.getCurrentPosition(
          position => {
            this.fetchWeather(position.coords.latitude, position.coords.longitude)

          },
          error => alert('Cannot find weather', JSON.stringify(error)),
        );
        return position;
    };

    const fetchWeather = (lat = 25, lon = 25) => {
        fetch(
          `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
        )
          .then(res => res.json())
          .then(json => {
            setTemp(json.main.temp)
            setConditions(json.weather[0].main)
            setIsLoading(false)
          });
    };




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
                if(!existingData[currId].includes(selectedOptions[i].idCode)){
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

    const submitField = () => {
        if(selectedOptions.length == 0) {
            return;
        }
        let res = [];
        for(i = 0; i < selectedOptions.length; i++) {
            res.push(selectedOptions[i].idCode);
        }
        submitFunction({id, question: currId, selection: res})
    }

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
        if(data.helperText.length != 0) {
            return (<Text style={styles.helperText}>{data.helperText}</Text>)
        }
        return null;
    }

    const CheckIcon = (style) => (
        <Icon {...style} name='checkmark-outline' />
    )


    const onImportWeatherPress = () => {
      if(!toggleWeatherHelper){
        setToggleWeatherHelper(true);
        setAdvancedButtonAppearance("filled");
      }else{
        setToggleWeatherHelper(false);
        setAdvancedButtonAppearance("outline");
      }
    };

    const WeatherIcon = (style) => (
        <Icon {...style} name='sun-outline' />
    );

    const CustomCardHeader = () => (
      <Layout style={styles.headerObjects}>
          <Text
            style={styles.headerText}
            category='h6'
          >
            {data.question}
          </Text>
          { importFrom == "Weather" ?
              <Button style={styles.importButton} appearance={advancedButtonAppearance} icon={WeatherIcon} onPress={()=> onImportWeatherPress() }></Button>
            :
              <Layout>
              </Layout>
          }
      </Layout>
    );




    const WeatherHelper = () => {
      if(toggleWeatherHelper){
        fetchWeather()
        return(
          isLoading ?
              (<Text>Fetching The Weather</Text>) :
              (
                <Layout style={styles.weatherCard}>
                  <Text style={{margin: 8, fontWeight: 'bold',}}>
                    {Constants.TEMP_ANNOUNCE} {temp}
                  </Text>
                  <Text style={{margin: 8, fontWeight: 'bold',}}>
                    {Constants.CONDITIONS_ANNOUNCE} {conditions}
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
