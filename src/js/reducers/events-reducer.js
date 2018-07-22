export default function eventReducer (state = {}, action) {
    console.log('event reducer', action.events)
    switch (action.type) {
        case "EVENT_FETCH_SUCCESS":
            const newState = Object.assign({}, state, action.events);
            
            /*{
                ...state,
                events: {
                    ...state.events,
                        allEvents: action.events.events
                }
            }*/
            console.log('events newState: ', newState)
            return newState;
        default:
            return state;
      }
}