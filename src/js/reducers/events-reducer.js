export default function eventReducer (state = {}, action) {
    switch (action.type) {
        case "EVENT_SUCCESS":
            const newState = Object.assign({}, state, action.events, action.genres, action.locations);
            console.log('newState: ', newState)
          return newState;
        default:
          return state
      }
}