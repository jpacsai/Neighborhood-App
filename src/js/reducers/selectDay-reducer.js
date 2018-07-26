export default function selectDayReducer (state = [], action) {
    
    switch (action.type) {
        case 'ADD_DAY':
            const addToState = [...state, action.payload];
            return addToState;

        case 'REMOVE_DAY':
            const removeFromState = [...state];
            removeFromState.splice(action.payload, 1);
            return removeFromState;

        case 'CLEAR_FILTERS':
            return [];

        default:
            return state
    }
}