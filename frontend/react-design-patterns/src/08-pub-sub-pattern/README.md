# Observer Pattern and Pub Sub

## Observer Pattern

- It contains 2 components
  - Subject -> An Object which holds the details of all the observer
  - Observer -> The actual end users who wants to react to the event
- This is `one to many` fashion. `One Subject multiple Observers`
- Subject will get the events ahead of the observer and Subject will always maintains the list of observer.
- Subjects and Observers are directly aware about each others

### Flow of Observer pattern:

Whenever there is the event/process triggered, those event where pushed into `Subject`, Now the subject will notify all its `Observers` within its list about the new event. <br>

While this is a manual implementation (Under event-bus-Observer), many JavaScript developers use built-in tools like the Node.js EventEmitter or browser EventListeners which follow the same underlying pattern. <br>

Would you like to see how this pattern is used specifically for state management in frameworks like React?
