export default function modalVisibilityReducer (state = false, action) {
    
    switch (action.type) {
        case 'HIDE_FILTER_MODAL':
        case 'SHOW_FILTER_MODAL':
        case 'TOGGLE_FILTER_MODAL':
            return action.payload;
            
        default:
            return state;
    }
}