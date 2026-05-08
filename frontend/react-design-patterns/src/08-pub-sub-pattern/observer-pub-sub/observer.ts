// * Observer pattern Implementation
class Observer {
  name: string;

  constructor(name: string) {
    this.name = name
  }

  update(data: string) {
    console.log('Event Received', data)
  }
}

class Subject {
  observers: Observer[];

  constructor() {
    // * Here we are maintianing the relation between Observer and Subject
    // * All functionalities are sync
    this.observers = []
  }

  subscribe(observer: Observer) {
    this.observers.push(observer);
    // this.notify(`Welcome ${observer.name}`)

    return () => {
      this.observers = this.observers.filter(obs => obs !== observer)
      // this.notify(`${observer.name} Left`)
    }
  }

  notify(data: string) {
    this.observers.forEach(observer => {
      observer.update(data);
    })
  }
}

const subject_1 = new Subject();

const reader_1 = new Observer("reader 1")
const reader_2 = new Observer("reader 2")

const unsubscribe_1 = subject_1.subscribe(reader_1)
const unsubscribe_2 = subject_1.subscribe(reader_2)

subject_1.notify("Hello Users")
unsubscribe_1()
subject_1.notify('I user left')