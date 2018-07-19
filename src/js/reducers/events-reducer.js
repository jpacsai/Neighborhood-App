export default function eventReducer (state = [], action) {
    switch (action.type) {
        case "EVENT_SUCCESS":
            const events = action.events
          return [...state, events]
        default:
          return state
      }
}