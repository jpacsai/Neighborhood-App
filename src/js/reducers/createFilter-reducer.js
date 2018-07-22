export default function createFilterReducer (state = {}, action) {
    switch (action.type) {
        case 'FILTERLIST_CREATED':
            const newState = {
                ...state,
                filters: {
                    ...state.filters,
                    genres: action.genres,
                    locations: action.locations
                }
            }
            console.log('filterList newState', newState);
            return newState;
        default:
          return state
    }
}