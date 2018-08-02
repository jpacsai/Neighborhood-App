export default function infoWindowReducer (state = null, action) {
    switch (action.type) {
        case 'OPEN_INFO_WINDOW':
            const openState = {
                lat: action.lat,
                lng: action.lng,
                events: action.events
            }

            return openState;
        
        case 'CLOSE_INFO_WINDOW':
            const closeState = Object.assign({}, state);
            closeState.events = null;

            return closeState;

        default:
            return state
    }
}