export default function eventReducer (state = {}, action) {

    switch (action.type) {
        case "FETCH_READY":
        case "SORT_EVENTS":
            
            const newState = Object.assign({}, state, action.payload);
            // console.log('new events',newState)
            return newState;

        default:
            return state;
    }
}