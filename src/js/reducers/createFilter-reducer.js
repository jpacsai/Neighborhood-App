export default function createFilterReducer (state = {}, action) {
    console.log('filter reducer: ', action.type);
    
    switch (action.type) {
        case 'FILTERLIST_CREATED':
            const newState = {
                ...state,
                locations: action.locations
            }
            return newState;

        default:
          return state
    }
}