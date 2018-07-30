export default function defaultBoundsReducer (state = {}, action) {
    
    switch (action.type) {
        case 'FETCH_READY':
            return {
                ne: action.bounds.ne,
                sw: action.bounds.sw
            };
            
        default:
            return state;
    }
}