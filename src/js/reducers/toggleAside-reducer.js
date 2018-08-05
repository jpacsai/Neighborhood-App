export default function toggleAsideReducer(state = false, action) {
    
    switch(action.type) {
        case 'TOGGLE_ASIDE':
            return action.payload;

        case 'CLOSE_ASIDE':
            return false;
            
        default:
            return state;
    }
}