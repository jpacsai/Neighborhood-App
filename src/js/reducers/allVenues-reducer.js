export default function allVenuesReducer (state = [], action) {
    
    switch (action.type) {
        case 'FETCH_READY':
            return action.allVenues;

        default:
          return state
    }
}