export default function infoWindowReducer (state = null, action) {
    switch (action.type) {
        case 'OPEN_INFO_WINDOW':
            const openState = {
                lat: action.lat,
                lng: action.lng,
                events: action.events
            }

            console.log('infoWindow', openState);
            return openState;
        
        case 'CLOSE_INFOWINDOW':
            return null;

        default:
            return state
    }
}