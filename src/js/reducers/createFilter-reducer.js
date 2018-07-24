export default function createFilterReducer (state = {}, action) {
    
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