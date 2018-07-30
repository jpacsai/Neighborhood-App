export default function venueReducer (state = [], action) {
    
    switch (action.type) {
        case 'FETCH_READY':
            return action.allVenues;

        default:
            return state
    }
}