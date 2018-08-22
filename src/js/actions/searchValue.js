export function searchValue(event) {
    const value = event.target.value.trim();
    return {
        type: 'SEARCH_VALUE',
        value
    }
}