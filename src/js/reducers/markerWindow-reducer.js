export default function markerWindowReducer(state = null, action) {
    switch(action.type) {
        case 'OPEN_MARKER_WINDOW':
            console.log('open marker window', action.eventsArr)
            return action.eventsArr;

        default:
            return state;
    }
}