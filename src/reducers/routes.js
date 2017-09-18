import {LOCATION_CHANGE} from 'react-router-redux';

export default (state = {}, action) => {
    switch (action.type) {
        case LOCATION_CHANGE: {
            // Place to do some listening od location change. Should it mutate ?
            break;
        }

        default: {
            return state;
        }
    }

    return state;
}