function createPromise(value) {
    return new Promise((resolve) => {
            resolve(value);
    });
}
createPromise(5)
    .then((value1) => {
        console.log(`Resolved with: ${value1}`);
        return createPromise(10).then((value2) => value1 + value2);
    })
    .then((sum1) => {
        console.log(`Intermediate Sum: ${sum1}`);
        return createPromise(15).then((value3) => sum1 + value3);
    })
    .then((totalSum) => {
        console.log(`Total Sum: ${totalSum}`);
    })
    .catch((error) => {
        console.error(error);
    });