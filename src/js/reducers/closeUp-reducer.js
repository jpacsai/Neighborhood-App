export default function closeUpReducer (state = false, action) {
    
    switch (action.type) {
        case 'TOGGLE_CLOSEUP':
            console.log('closeup', action.payload)
            return action.payload;
            
        default:
            return state;
    }
}