export default function filterEventsReducer (state = [], action) {
    
    switch (action.type) {
        case 'FILTERING_EVENTS':
            const newState = action.filteredEvents;
            console.log('filtered events: ',newState);
            return newState;

        case 'NO_MATCHING_FILTERED_EVENTS':
            const value = action.filteredEvents;
            return value;

        default:
            return state;
    }
}