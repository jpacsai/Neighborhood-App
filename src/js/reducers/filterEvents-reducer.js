export default function filterEventsReducer (state = [], action) {
    
    switch (action.type) {
        case 'FILTERING_EVENTS':
        case 'NO_MATCHING_FILTERED_EVENTS':
            return action.filteredEvents;

        case 'CLEAR_FILTERS':
            return [];

        default:
            return state;
    }
}