export default function eventReducer (state = {}, action) {
    switch (action.type) {
        case "EVENT_FETCH_SUCCESS":
            const newState = {
                ...state,
                events: {
                    ...state.events,
                        allEvents: action.events.events
                }
            }
            return newState;
        default:
            return state;
      }
}