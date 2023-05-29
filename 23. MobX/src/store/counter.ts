import { makeAutoObservable } from "mobx";

class Counter {
  count = 1;
  constructor() {
    makeAutoObservable(this);
  }

  inc() {
    this.count = this.count + 1;
  }

  dec() {
    this.count = this.count - 1;
  }
}

export default new Counter();
