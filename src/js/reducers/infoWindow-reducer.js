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
            const closeState = {
                lat: action.lat,
                lng: action.lng,
                events: null
            }

            return closeState;

        default:
            return state
    }
}