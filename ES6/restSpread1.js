function product(...numb) {
    return numb.reduce(function(acc, number) {
        return acc * number;
    }, 1)
}