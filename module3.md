# Module 3 - Async Redux
> redux is built on top of the reducer and is a way to control state for our application

## Key Concepts
> explain middleware
> explain thunk and implement it

## Essential Questions
> how does data flow from an api response to state using redux?
> what is middleware?
> how would you integrate middleware into your redux store
> how do you use redux in a react application?

### General Notes
> all actions in redux are synchronous by default
> thunk extends the functionality of redux
> thunk allows our actions to dispatch other actions
> thunk allows advanced behavior like introducing API calls
> asynchronous, put simply, is multitasking
> middleware is a way to extend the standard functionality with additional behavior
> middleware provides a third party extension point after an action is dispatched, before it reaches the reducer
> reduxLogger is an example of common redux middleware
> reduxThunk is an example of common redux middleware
> asynchronous actions need to happen before the actions reach the reducers

### Objective 1 - Explain What Redux is and the Problem it Solves

### Objective 2 - Create a Redux Store and Connect it to a React Applications

### Objective 3 - Use the Connect Function to Connect React Components to the Redux Store

### Objective 4 - Write Actions and Action CReators to Describe State Changes

### Objective 5 - Write Reducers to Respond to Actions and Update State
