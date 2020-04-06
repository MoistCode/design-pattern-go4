class Iterable {
  [Symbol.iterator]() {
    let step = 0;

    const iterator = {
      next() {
        step++;

        if (step < 3) {
          return {
            value: step,
            done: false,
          };
        }

        return {
          value: null,
          done: true,
        };
      };

      return iterator;
    }
  }
}

const iterable = new Iterable();

iterable.next(); // { value: 1; done: false }
iterable.next(); // { value: 2; done: false }
iterable.next(); // { value: null; done: false }