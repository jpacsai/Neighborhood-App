export default function boundsReducer (state = {}, action) {
    
    switch (action.type) {
        case 'FETCH_READY':
        case 'FILTERING_EVENTS':
        case 'CLEAR_FILTERS':
            return {
                nw: action.bounds.nw,
                se: action.bounds.se
            };
            
        default:
            return state;
    }
}