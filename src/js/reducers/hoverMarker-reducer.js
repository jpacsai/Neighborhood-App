export default function hoverMarkerReducer(state = false, action) {
    switch(action.type) {
        case 'HOVER_MARKER_IN':
            return action.id;

        case 'HOVER_MARKER_OUT':
            return false;
            
        default:
            return state;
    }
}