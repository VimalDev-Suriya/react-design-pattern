# Observer Pattern and Pub Sub

## Observer Pattern

- It contains 2 components
  - Subject -> An Object which holds the details of all the observer
  - Observer -> The actual end users who wants to react to the event
- Subject will get the events ahead of the observer and Subject will always maintains the list of observer.

### Flow of Observer pattern:

Whenever there is the event/process triggered, those event where pushed into `Subject`, Now the subject will notify all its `Observers` within its list about the new event. <br>

While this is a manual implementation (Under event-bus-Observer), many JavaScript developers use built-in tools like the Node.js EventEmitter or browser EventListeners which follow the same underlying pattern. <br>

Would you like to see how this pattern is used specifically for state management in frameworks like React?

### Features of Observer Pattern

1. Coupled - Both Observer and Subject are coupled Directly
2. Subjects and Observers are directly aware about each others
3. This is `one to many` fashion. `One Subject multiple Observers`
4. Mostly implemented within the Same application.
5. Synchronous - Subject will be executed immediately once it receives the actions

## Pub Sub Pattern:

- It has the Middle-man (Event Bus / Message Broker) to handle the events.
- Loosely coupled - Publisher and Subscriber does not know about each other - Both of them are isolated by the 3rd party Middle man
- `Many to Many` relations, Multiple Publishers and multiple Consumers - None of them know eah other
- Mostly `Async`, all the events are pushed into the queue and processed

### Usecases
- Mainly used in Distributed systems- Communication between multiple system