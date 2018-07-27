export default function displayListReducer (state = [], action) {
    switch (action.type) {
        case 'FETCH_READY':
            return action.payload;
        case 'FILTERING_EVENTS':
            return action.filteredEvents;

        case 'NO_MATCHING_FILTERED_EVENTS':
            return [];

        case 'CLEAR_FILTERS':
            return action.allEvents;

        default:
            return state;
    }
}