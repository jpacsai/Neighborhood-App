export function sortByReducer(state = 'abc', action) {
    switch(action.type) {
        case 'SORT_BY_ABC':
            return 'abc';
        case 'SORT_BY_DATE':
            return 'date';
        case 'SORT_BY_LOCATION':
            return 'location';
        default:
            return state;
    }
}