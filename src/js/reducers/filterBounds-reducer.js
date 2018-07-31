export default function filterBoundsReducer (state = {}, action) {
    
    switch (action.type) {
        case 'FILTERING_EVENTS':
            return {
                nw: action.nw,
                se: action.se
            };
            
        default:
            return state;
    }
}