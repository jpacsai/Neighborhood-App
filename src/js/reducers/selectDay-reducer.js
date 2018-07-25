export default function selectDayReducer (state = [], action) {
    
    switch (action.type) {
        case 'ADD_DAY':
            const addToState = [...state, action.payload]
            console.log(addToState)
            return addToState;

        case 'REMOVE_DAY':
            const removeFromState = [...state];
            removeFromState.splice(action.payload, 1);
            console.log(removeFromState);
            return removeFromState;

        default:
            return state
    }
}