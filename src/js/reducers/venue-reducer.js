export default function venueReducer (state = [], action) {
    
    switch (action.type) {
        case 'VENUES':
            return action.payload;

        default:
            return state
    }
}