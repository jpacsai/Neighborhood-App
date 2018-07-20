export default function filterReducer (state = {}, action) {
    console.log(action);
    switch (action.type) {
        case "FILTERS_CREATED":
           return Object.assign({}, state, {
                genres: action.genres,
                locations: action.locations
            });
        default:
          return state
      }
}