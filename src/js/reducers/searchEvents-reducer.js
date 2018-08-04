export default function searchEventsReducer(state = null, action) {
    switch(action.type) {
        case 'SEARCHING_EVENTS':
            return action.searchResults;
        
        case 'NO_MATCHING_SEARCHED_EVENTS':
            return action.searchResults;

        default:
            return state;
    }
}