export default function displayListReducer (state = [], action) {
    switch (action.type) {
        case 'DISPLAY_LIST':
            console.log('REDUCER',action.displaying)
            return action.displaying;
        default:
            return state;
    }
}