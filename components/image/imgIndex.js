import {Component} from 'react';

export class ImageSelector extends Component {
    constructor(props){
        super(props)
        this.status = null;
    }
    // require does not accept variables, so it's been wraped within switch cases
    pathHandler = (name) => {
        switch (name) {
            case '../image/test.jpg': 
                return require('../image/test.jpg');
            case '../image/trafficway_example.png':
                return require('../image/trafficway_example.png');
            case '../image/manner_example.png':
                return require('../image/manner_example.png')
            // append images file here if needed
        }
    }
}

export default ImageSelector;