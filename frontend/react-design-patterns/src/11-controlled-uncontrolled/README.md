# Controlled and Uncontrolled Components

## Controlled Components:

When React handles the state of the component eg - form, from input handling, validation and submission, then the components are called Controlled Components.

- Here we will manage everything of the component using the states.
- Here the React State is the _Source of truth_

### Pros & Cons:

- Pros - react can manage E2E of mangaing them
- Cons - If we are not handling in the right way - it may lead to memory leaks - multiple re-render due to state update for every Keystroke

## Uncontrolled Components:

When DOM maintains the state of the component.

- Hooks like useFormStatus and useActionState are the example of Uncontrolled - as untill the form gets submitted all the functionality are taken care by the DOM itself.
