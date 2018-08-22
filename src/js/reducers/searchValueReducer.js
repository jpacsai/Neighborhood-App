export default function searchValueReducer(state='', action) {
    switch(action.type) {
        case 'SEARCH_VALUE':
            return action.value;

        case 'SEARCH_CLEAR':
            return '';
            
        default:
            return state;
    }
}