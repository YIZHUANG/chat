type func = (...args: any) => void; // can be any;
interface Events {
  [key: string]: func[];
}

class Emitter {
  public events: Events;
  constructor() {
    this.events = {};
  }
  subscribe(name: string, fn: func) {
    if (!this.events[name]) {
      this.events[name] = [];
    }

    this.events[name].push(fn);

    return () => {
      this.events[name] = this.events[name].filter(eventFn => fn !== eventFn);
    };
  }
  emit(name: string, data?: any) {
    // data can be any
    const event = this.events[name];

    if (event) {
      event.forEach(fn => {
        fn(data);
      });
    }
  }
}

const emitter = new Emitter();

export default emitter;
