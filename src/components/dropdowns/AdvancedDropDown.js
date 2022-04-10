import React from 'react';
import { Text, Button, VStack, HStack } from 'native-base';
import { styles } from './AdvancedDropDown.style';
import { connect } from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import { API_KEY } from '../../utils/WeatherAPIKey';
import * as Constants from '../../constants';
import TooltipView from '../Tooltip';
import QuestionSection from '../QuestionSection';
import IconButton from '../IconButton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SectionedMultiSelect from 'react-native-sectioned-multi-select'
import SelectionValidation from '../../utils/SelectionValidation.js';

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
    const [isInvalid, setIsInvalid] = React.useState(false);

    let currId = data.humanReadableId;
    const reducerData = questionReducer.data.find(entry => entry.id == id);
    let existingData = !reducerData?.response ? null : reducerData.response;
    let i;
    // Populate if value already exists in redux

    if(selectedOptions.length == 0) {
        if(existingData != null) {
            if(existingData[currId] != null) {
                let currOptions = []
                for (i = 0; i < data.answerOptions.length; i++) {
                    if(existingData[currId].includes(data.answerOptions[i].name)) {
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
                if(!existingData[currId].includes(selectedOptions[i].name)){
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
        let selectionValidation = SelectionValidation
                 selectionValidation.validateField(optionText);
                 let localStatus = selectionValidation.status
                 console.log('at the right place, at least')
                 if (localStatus) {
                    setIsInvalid(false)
                    setSelection(optionText);
                 }
                 else {
                    setIsInvalid(true)
                    setSelection(optionText);
                 }
            if(selectedOptions.length == 0) {
                setIsInvalid(true)
                return;
        }
        let res = [];
        for(i = 0; i < selectedOptions.length; i++) {
            res.push(selectedOptions[i].name);
        }
        submitFunction({id, question: currId, selection: res})
    }

    //Clears selection
    const clearRedux = () => {
        submitFunction({id, question: currId, selection: null})
    }

    const addOption = (options) => {
        if (!options) {
            return
        }
        if(options.length == 0) {
            clearRedux();
            setSelectedOptions([]);
        }
        setSelectedOptions(options);
    }

    const WeatherIcon = (style) => (
        <Icon name='wb-sunny' color='white' size={25}/>
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
                    <IconButton leftMargin={4} icon={WeatherIcon()} onPress={()=> onImportWeatherPress() }/>
                )
        }
    }

    const WeatherHelper = () => {
      if(toggleWeatherHelper){
        //fetchWeather()
        findWeatherData()
        return(
          isLoading ?
              (<Text>Fetching The Weather</Text>) :
              (
                <VStack>
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
                </VStack>
              )

        );
      }
    };

    const tooltip = () => {
        return(<TooltipView toolTip={data.tooltip} helperImg={data.helperImg}/>)
    }

    return (
        <QuestionSection
            key={key}
            title={data.question}
            helperText={data.helperText}
            tooltip={tooltip()}
            errorMessage='Invalid Input'
            isInvalid={isInvalid}
            required={data.required}
        >
            {WeatherHelper()}
            <HStack justifyContent='space-around'>
            <SectionedMultiSelect
              items={data.answerOptions}
              IconRenderer={Icon}
              uniqueKey='id'
              selectText={'Select Options ...'}
              onSelectedItemsChange={addOption}
              selectedItems={selectedOptions}
              onConfirm={addOption}
              showCancelButton={true}
            />
            {RenderHeaderIcon()}
            </HStack>
        </QuestionSection>
    );
};

const mapStateToProps = (state, props) => {
    const { story } = state;
    const { reducer } = props;
    const questionReducer = state[reducer];
    return { story, questionReducer }
};

export default connect(mapStateToProps)(AdvancedDropDown);
