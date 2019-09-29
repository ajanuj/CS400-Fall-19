function* fibs () {
    let [v1, v2, result] = [0, 1, 0]
    while (true) {
        result = v1+v2
        v1 = v2
        v2 = result
        yield result
    }
}

function* evenFibs() {
    const myFibs = fibs();
    while (true) {
        let nextFib = myFibs.next();
        if (nextFib.value % 2 == 0) {// for even ones
            yield nextFib.value;
        }
    }
}

// Use the generators to print out the first 6 even Fibonacci numbers.
myFibs = evenFibs();
let count = 6;
while (count --> 0) {
    console.log(myFibs.next().value);
}