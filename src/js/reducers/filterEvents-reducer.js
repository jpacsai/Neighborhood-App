export default function filterEventsReducer (state = [], action) {
    switch (action.type) {
        case 'FILTERING_EVENTS':
            const newState = action.filteredEvents;
            console.log('filtered events: ',newState);
            return newState;

        default:
            return state
      }
}