export default function fetchReadyReducer(state = false, action) {
    switch (action.type) {
        case 'FETCH_READY':
            return true;
        
        default:
            return state;
    }
}