function reject(array, iteratorFunction) {
    return array.filter(function (arr) {
        return !iteratorFunction(arr);
    });
}