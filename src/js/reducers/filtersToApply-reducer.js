export default function filtersToApplyReducer (state = [], action) {
    
    switch (action.type) {
        case 'ADD_LOCATION':
            const a = [...state, action.filter];
            return a;

        case 'REMOVE_LOCATION':
            const b = [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
            return b;
            
        case 'CLEAR_FILTERS' :
            return [];

        default:
            return state
    }
}