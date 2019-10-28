function pluck(array, property) {
    return array.map(function (arr) {
        return arr[property];
    });
}