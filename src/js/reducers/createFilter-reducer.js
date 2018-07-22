export default function createFilterReducer (state = {}, action) {
    console.log('create filter action:', action.type)
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
            //Object.assign({}, state, action.filters.genres, action.filters.locations);
            console.log('filterList newState', newState);
            return newState;
        default:
          return state
    }
}