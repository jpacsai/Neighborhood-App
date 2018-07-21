export default function filterReducer (state = initialState, action) {

    const initialState = {
        location: '',
        genre: ''
    }

    switch (action.type) {
        case 'FILTER_LOCATION':
            const newState = Object.assign({}, state, action);
            console.log(newState);
            return newState;
        case 'FILTER_GENRE':
            console.log(state);
            //const newState = Object.assign({}, state, state.filter.location);
            return state;
        default:
            return state
      }
}