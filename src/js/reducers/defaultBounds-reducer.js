export default function defaultBoundsReducer (state = {}, action) {
    
    switch (action.type) {
        case 'FETCH_READY':
            return {
                nw: action.bounds.nw,
                se: action.bounds.se
            };
            
        default:
            return state;
    }
}