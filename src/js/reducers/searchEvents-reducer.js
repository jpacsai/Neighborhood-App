export default function searchEventsReducer(state = null, action) {
    switch(action.type) {
        case 'SEARCHING_EVENTS':
            return action.searchResults;
        
        case 'NO_MATCHING_SEARCHED_EVENTS':
            return action.searchResults;

        case 'SORTING_SEARCH_LIST':
            return action.sortedList;

        default:
            return state;
    }
}