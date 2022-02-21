import {Component} from 'react';

export class ImageSelector extends Component {
    constructor(props){
        super(props)
        this.status = null;
    }
    // require does not accept variables, so it's been wraped within switch cases
    pathHandler = (name) => {
        switch (name) {
            case '../image/airbag_diagram.png':
                return require('../image/airbag_diagram.png');
            case '../image/automation_levels.png':
                return require('../image/automation_levels.png');
            case '../image/bike_lanes.png':
                return require('../image/bike_lanes.png');
            case '../image/cargo_body_types.png':
                return require('../image/cargo_body_types.png');
            case '../image/CDL.png':
                return require('../image/CDL.png');
            case '../image/CDL_endorsements.png':
                return require('../image/CDL_endorsements.png');
            case '../image/determine_responsible_carrier.png':
                return require('../image/determine_responsible_carrier.png');
            case '../image/hazardous_materials_classes.png':
                return require('../image/hazardous_materials_classes.png');
            case '../image/initial_contact.png':
                return require('../image/initial_contact.png');
            case '../image/interchange_diagram.png':
                return require('../image/interchange_diagram.png');
            case '../image/intersection_diagram.png':
                return require('../image/intersection_diagram.png');
            case '../image/intersection_examples.png':
                return require('../image/intersection_examples.png');
            case '../image/manner_example.png':
                return require('../image/manner_example.png');
            case '../image/seating_positions.png':
                return require('../image/seating_positions.png');
            case '../image/trafficway_diagram.png':
                return require('../image/trafficway_diagram.png');
            case '../image/workzone_diagram.png':
                return require('../image/workzone_diagram.png');
        }
    }
}

export default ImageSelector;