export default function fetchReadyReducer(state = false, action) {
    console.log(action.type)
    switch (action.type) {
        case 'FETCH_READY':
            return true;

        case 'ERROR':
            return 'error';
        
        default:
            return state;
    }
}