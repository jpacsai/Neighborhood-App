export default function toggleAsideReducer(state = false, action) {
    switch(action.type) {
        case 'TOGGLE_ASIDE':
            return action.payload;

        default:
            return state;
    }
}