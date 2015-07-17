class Test {
  static hi = "hi";
  constructor() {
    this.a = 1;
  }

  *test() {
    yield this.a;
  }
}

const test = new Test();
test.test();
