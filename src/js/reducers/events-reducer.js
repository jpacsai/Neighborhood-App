export default function eventReducer (state = {}, action) {

    switch (action.type) {
        case "EVENT_FETCH_SUCCESS":
        case "SORT_EVENTS":
            const newState = Object.assign({}, state, action.events);
            return newState;

        default:
            return state;
    }
}