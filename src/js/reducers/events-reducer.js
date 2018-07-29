export default function eventReducer (state = {}, action) {

    switch (action.type) {
        case "FETCH_READY":
        case "SORT_EVENTS":
            return action.payload;

        default:
            return state;
    }
}