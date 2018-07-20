export default function filterReducer (state = [], action) {
    switch (action.type) {
        case "FILTER_APPLIED":
            const newState = state.concat(action.events)
          return newState;
        default:
          return state
      }
}