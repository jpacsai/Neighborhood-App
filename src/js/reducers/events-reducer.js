export default function eventReducer (state = [], action) {
    switch (action.type) {
        case "EVENT_SUCCESS":
            const newState = state.concat(action.events)
          return newState;
        default:
          return state
      }
}