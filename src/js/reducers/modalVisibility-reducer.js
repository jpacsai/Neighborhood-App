export default function modalVisibilityReducer (state = false, action) {
    
    switch (action.type) {
        case 'TOGGLE_MODAL_VISIBILITY':
            return action.payload;
            
        default:
            return state;
    }
}