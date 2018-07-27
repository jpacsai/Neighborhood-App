export default function sortByReducer(state = 'abc', action) {

    switch(action.type) {
        case 'SORTING_LIST':
            return action.sortByVal
        default:
            return state;
    }
}