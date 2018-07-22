export default function filtersToApplyReducer (state = { location: null, genre: null }, action) {
    console.log('filtersToApply reducer');
    switch (action.type) {
        case 'ADD_LOCATION_FILTER':
            const a = {
                ...state,
                location: action.filter
            }
            console.log('add location filter: ', a);
            return a;
        case 'ADD_GENRE_FILTER':
            const b = {
                ...state,
                genre: action.filter
            }
            console.log('add genre filter: ', b);
            return b;
        default:
            return state
      }
}