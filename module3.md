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

### Objective 1 - Describe the Finite State Machine Pattern and Its Relationship to Building Redux Applications
> a finite state machine is a mathematical theory of computation
> a machine can have a finite number of states, but can only operate on one state at a given time
> the next state is calculated based on an input and the current state
> initial state is tracked in the store
> current state is tracked in the store
> inputs or actions trigger transitions (reducers) to the next state
> redux is NOT a finite state machine

### Objective 2 - Implement Redux Middleware Libraries Into a Redux Store Using ApplyMiddleware
> middleware is a common tool in programming to intercept some process, run a function, then continue the process
> middleware will generally try to use data being passed through functions
> middleware can stop actions
> middleware can forward an action untouched
> middleware can dispatch a different action
> middleware can dispatch multiple actions
> =================== add logger middleware ===================
> `npm install redux-logger`
>
> `import { applyMiddleware, createStore } from 'redux';`
> `import logger from 'redux-logger';`
>
> `const store = createStore(reducer, applyMiddleware(logger))`
> make sure the logger middleware is passed as the last argument in the `applyMiddleware` function


### Objective 3 - Use the Connect Function to Connect React Components to the Redux Store

### Objective 4 - Write Actions and Action CReators to Describe State Changes

### Objective 5 - Write Reducers to Respond to Actions and Update State
