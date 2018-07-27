export default function displayListReducer (state = [], action) {
    console.log(action.type)
    switch (action.type) {
        case 'FETCH_READY':
            return action.payload;

        case 'FILTERING_EVENTS':
            return action.filteredEvents;

        case 'NO_MATCHING_FILTERED_EVENTS':
            return [];

        case 'CLEAR_FILTERS':
            return action.allEvents;

        case 'SORTING_LIST':
            console.log('sorting list',action.sortedList)
            return action.sortedList;

        default:
            return state;
    }
}