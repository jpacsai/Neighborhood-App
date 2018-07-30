export default function modalVisibilityReducer (state = false, action) {
    
    switch (action.type) {
        case 'TOGGLE_DATE_VISIBILITY':
            console.log('hide?', action.payload)
            const newState = action.payload;
            return newState;
            
        default:
            return state;
    }
}