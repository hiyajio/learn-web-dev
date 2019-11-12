const numbers = [1, 2, 3];

function double([num, ...rest]) {
    if (!num) { return []; }
    return [num * 2, ...double(rest) ];
}