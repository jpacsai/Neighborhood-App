export default function filtersToApplyReducer (state = [], action) {
    
    switch (action.type) {
        case 'ADD_LOCATION_FILTER':
            const a = [...state, action.filter];
            return a;

        default:
            return state
    }
}