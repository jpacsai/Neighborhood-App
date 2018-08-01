export default function markerWindowReducer(state = { value: false, markerVenue: {}, eventsArr: [] }, action) {
    switch(action.type) {
        case 'OPEN_MARKER_WINDOW':
            const newState = {
                value: true,
                markerVenue: action.venue,
                eventsArr: action.eventsArr
            }
            console.log('open marker window', newState)
            return newState;

        case 'CLOSE_MARKER_WINDOW':
            const defaultState = {
                value: false,
                markerVenue: {},
                eventsArr: []
            }
            return defaultState;
            
        default:
            return state;
    }
}