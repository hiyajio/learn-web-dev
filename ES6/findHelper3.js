function findWhere(array, criteria) {
    let property = Object.keys(criteria)[0];

    return array.find(function(arr) {
        return arr[property] === criteria[property];
    });
}