class IterableWithReset {
    constructor(nums) {
      this.nums = nums;
      this.index = 0;
    }
 
    [Symbol.iterator]() {
        return {
            iter: this,
            next() {
                if (this.iter.index < this.iter.nums.length) {
                    return { value: this.iter.nums[this.iter.index++], done: false };
                }
                return { value: undefined, done: true };
            }
        };
    }
 
    reset() {
      this.index = 0;
    }
}
 
const list = new IterableWithReset([1, 2, 3, 4, 5]);
 
for (const num of list) {
    console.log(num);
}
 
list.reset();
for (const num of list) {
    console.log(num);
}  