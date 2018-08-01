export default function infoWindowReducer (state = null, action) {
    
    switch (action.type) {
        case 'INFOWINDOW':
            console.log('infoEvent', action.event)
            return action.event;
        
        case 'CLOSE_INFOWINDOW':
            return null;

        default:
            return state
    }
}