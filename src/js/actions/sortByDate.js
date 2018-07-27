export function sortByDate(arr) {
    if (arr) {
        const newArr = arr.slice(0);
        newArr.sort((a, b) => a.dates.start.dateObj.getTime() - b.dates.start.dateObj.getTime());
    return newArr;
    }
}