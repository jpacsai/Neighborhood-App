export function toggleAside(val) {
    
    const payload = val ? false : true;

    return {
        type: 'TOGGLE_ASIDE',
        payload
    }
}