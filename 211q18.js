const reverseIterable = (arr) => {
    return {
        [Symbol.iterator]() {
            let index = arr.length - 1;
            return{
                next() {
                    if (index >= 0){
                        return {value: arr[index--], done: false};

                    }
                    return {value: undefined, done: true};
                }
            };
        }
    }
}

const arr = [1,2,3,4,5];
const reverseIterator = reverseIterable(arr);

for (const item of reverseIterator){
    console.log(item);
}