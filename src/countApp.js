class Counter {
  constructor(count) {
    this.count = 0;
  };
  countUp() {
    this.count ++;
    return this.count;
  };
  reset() {
    this.count = 0;
  }
  setCount(num) {
    this.count = num
  }
}