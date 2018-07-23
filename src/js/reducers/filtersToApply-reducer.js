export default function filtersToApplyReducer (state = { location: null }, action) {
    
    switch (action.type) {
        case 'ADD_LOCATION_FILTER':
            const a = {
                ...state,
                location: action.filter
            }
            return a;

        default:
            return state
    }
}