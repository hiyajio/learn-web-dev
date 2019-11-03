function unique(array) {
    return array.reduce(function(previous, item){
    var founditem = previous.find(function(prev){
        return prev === item;
    });
    if (founditem != item) {
        previous.push(item)
    }
    return previous;
    }, [])
}