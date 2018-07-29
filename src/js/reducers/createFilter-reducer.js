export default function createFilterReducer (state = {}, action) {
    
    switch (action.type) {
        case 'FETCH_READY':
            const newState = {
                ...state,
                locations: action.locations,
                dates: action.dates,
                datesObj: action.datesObj
            }
            return newState;

        default:
          return state
    }
}