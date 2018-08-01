export default function closeUpReducer (state = {value: false}, action) {
    
    switch (action.type) {
        case 'START_CLOSEUP':
        case 'CLOSE_CLOSEUP':
            const newState = Object.assign({}, state)
            newState.value = action.value;
            newState.lat = action.lat;
            newState.lng = action.lng;
            return newState;
            
        default:
            return state;
    }
}