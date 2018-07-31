export default function closeUpReducer (state = {value: false}, action) {
    
    switch (action.type) {
        case 'TOGGLE_CLOSEUP':
        case 'CLOSE_CLOSEUP':
            const newState = Object.assign({}, state)
            newState.value = action.value;
            newState.event = action.event;
            console.log(newState)
            return newState;
            
        default:
            return state;
    }
}