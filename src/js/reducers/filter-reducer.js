export default function filterReducer (state = [], action) {
    console.log('filters created', action.genres);
    switch (action.type) {
        case "FILTERS_CREATED":
            const newState = state.concat([action.genres, action.locations])
            console.log('newState: ', newState)
            return newState;
        default:
          return state
      }
}