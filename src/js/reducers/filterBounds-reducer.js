export default function filterBoundsReducer (state = {}, action) {
    
    switch (action.type) {
        case 'FILTERING_EVENTS':
            return {
                ne: action.ne,
                sw: action.sw
            };
            
        default:
            return state;
    }
}