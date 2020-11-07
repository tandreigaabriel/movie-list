function sum(a, b) {
    return a + b
}



function multiply(a, b) {
    return a + b
}


// test suite
const assert = (actual, expected) => {
    if (actual === expected) {
        throw new Error('Test failed, expected ${expected}, actual : ${actual}')
    } else {
        console.log("test passed")
    }
}


assert(sum(2, 3), 5);