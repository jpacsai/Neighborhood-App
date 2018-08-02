export default function infoWindowReducer (state = {value: false}, action) {
    switch (action.type) {
        case 'OPEN_INFO_WINDOW':
            const openState = {
                value: true,
                lat: action.lat,
                lng: action.lng,
                events: action.events
            }

            return openState;
        
        case 'CLOSE_INFO_WINDOW':
            const closeState = Object.assign({}, state);
            closeState.value = false;
            closeState.events = null;

            return closeState;

        default:
            return state
    }
}