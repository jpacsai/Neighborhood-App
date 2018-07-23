export default function eventReducer (state = {}, action) {

    switch (action.type) {
        case "EVENT_FETCH_SUCCESS":
            const newState = Object.assign({}, state, action.events);
            return newState;

        default:
            return state;
    }
}