export default function hideDateReducer (state = true, action) {
    
    switch (action.type) {
        case 'TOGGLE_DATE_VISIBILITY':
            const newState = action.isHidden;
            return newState;
            
        default:
            return state;
    }
}