export default function mapSizeReducer (state = 0, action) {
    
    switch (action.type) {
        case 'MAP_SIZE':
            return {
                width: action.width,
                height: action.height
            };
            
        default:
            return state;
    }
}