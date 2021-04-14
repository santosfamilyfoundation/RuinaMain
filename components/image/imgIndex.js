import {Component} from 'react';

export class ImageSelector extends Component {
    constructor(props){
        super(props)
        this.status = null;
    }
    // require does not accept variables, so it's been wraped within switch cases
    pathHandler = (name) => {
        switch (name) {
            case '../image/manner_example.png':
                return require('../image/manner_example.png');
            case '../image/initial_contact.png':
                return require('../image/initial_contact.png')
            // append images file here if needed
        }
    }
}

export default ImageSelector;