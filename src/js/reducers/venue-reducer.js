export default function venueReducer (state = [], action) {
    
    switch (action.type) {
        case 'FETCH_READY':
            return action.allVenues;

        case 'FILTERING_EVENTS':
            return action.venues;

        case 'SEARCHING_EVENTS':
            return action.venues;

        case 'NO_MATCHING_FILTERED_EVENTS':
        case 'NO_MATCHING_SEARCHED_EVENTS':
            return [];

        case 'CLEAR_FILTERS':
            return action.allVenues;

        default:
            return state
    }
}