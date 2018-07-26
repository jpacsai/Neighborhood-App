export default function filterEventsReducer (state = [], action) {
    
    switch (action.type) {
        case 'FILTERING_EVENTS':
            const newState = action.filteredEvents;
            return newState;

        case 'NO_MATCHING_FILTERED_EVENTS':
            const value = action.filteredEvents;
            return value;

        case 'CLEAR_FILTERS':
            return [];

        default:
            return state;
    }
}