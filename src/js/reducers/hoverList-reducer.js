export default function hoverListReducer (state = null, action) {
    
    switch (action.type) {
        case 'HOVER_IN_LIST':
            return action.id;

        case 'HOVER_OUT_LIST':
        case 'CLOSE_INFOWINDOW':
            return null;
            
        default:
            return state
    }
}