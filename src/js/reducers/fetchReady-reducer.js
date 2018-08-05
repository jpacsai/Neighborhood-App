export default function fetchReadyReducer(state = false, action) {

    switch (action.type) {
        case 'FETCH_READY':
            return true;

        case 'ERROR':
            return 'error';
        
        default:
            return state;
    }
}