export default function filtersToApplyReducer (state = { location: null, genre: null }, action) {
    switch (action.type) {
        case 'ADD_LOCATION_FILTER':
            const a = {
                ...state,
                location: action.filter
            }
            return a;
        case 'ADD_GENRE_FILTER':
            const b = {
                ...state,
                genre: action.filter
            }
            return b;
        default:
            return state
      }
}