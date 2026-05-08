// * Observer pattern Implementation

export class Observer {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(data: string) {
    console.log('Event Received => ', data);
  }
}

// * Subject act as the Registry for the list of observers
export class Subject {
  observeres: Observer[];

  constructor() {
    this.observeres = [];
  }

  subscribe(observer: Observer) {
    this.observeres.push(observer);
  }

  unsubscribe(observer: Observer) {
    this.observeres = this.observeres.filter((obs) => obs !== observer);
  }

  notify(data: string) {
    this.observeres.forEach((observer) => {
      observer.update(data);
    });
  }
}

const subject = new Subject();

const observer_1 = new Observer('Reader 1');
const observer_2 = new Observer('Reader 2');

subject.subscribe(observer_1);
subject.subscribe(observer_2);

subject.notify('Hello Everyone!!');

subject.unsubscribe(observer_1);
subject.notify('Observer 1 Left');
