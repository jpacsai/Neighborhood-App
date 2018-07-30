export default function venueReducer (state = [], action) {
    
    switch (action.type) {
        case 'FETCH_READY':
            return action.allVenues;

        case 'FILTERING_EVENTS':
            return action.venues;

        default:
            return state
    }
}