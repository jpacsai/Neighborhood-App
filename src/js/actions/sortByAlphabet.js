export function sortByAlphabet(arr) {
    if (arr) {
        const newArr = arr.slice(0);
        newArr.sort((a, b) => {
            var textA = a.name;
            var textB = b.name;
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        })
        return newArr;
    }
}