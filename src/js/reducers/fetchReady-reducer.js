export default function fetchReadyReducer(state = false, action) {
    console.log(action.type)
    switch (action.type) {
        case 'FETCH_READY':
            console.log('fetch ready', action.payload);
            return true;
        
        default:
            return state;
    }
}