export default function closeUpReducer (state = {value: false}, action) {
    
    switch (action.type) {
        case 'START_CLOSEUP':
            const startState = Object.assign({}, state)
            startState.value = action.value;
            startState.lat = action.lat;
            startState.lng = action.lng;
            console.log('open',startState)
            return startState;
            
        case 'CLOSE_CLOSEUP':
            const closeState = Object.assign({}, state)
            closeState.value = action.value;
            console.log('close',closeState)
            return closeState;

        default:
            return state;
    }
}