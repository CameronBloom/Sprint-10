# Module 2 - Redux
> redux is built on top of the reducer and is a way to control state for our application

## Key Concepts
> explain what redux is
> use redux to create a reducer
> use redux to define actions
> use redux to utilize and update state in a component

## Essential Questions
> what are the benefits of using redux?
> how do you make a reducer?
> how do you use redux state in a component?
> how do you use redux in a react application?

### General Notes
> a reducer is a pure function that takes in previous state and an action, returning the next state
> actions trigger our reducer function
> dispatch functions call the actions that trigger our reducer to run
> a higher order component is a wrapper around another component that extends functionality
> redux architecture: 
> - store holds the state of our application
> - action describes the changes in the state of the application
> - reducer carries out the state transition based on the action
> redux uses a strict unidirectional data flow to keep everything organized
> redux principles:
> - there is a single source of truth
> - state is read-only
> - pure reducers describe how the state tree is transformed by actions
> the redux store is like an object
> - the key is the slice of state
> - the value is the state at that slice of state
> in order to communicate with the redux store, we wrap our application within a <Provider> element
> in order to make the store available in each component, we use the `connect` function
> the `connect` function takes two arguments, `mapStateToProps` and `mapDispatchToProps`

### Objective 1 - Explain What Redux is and the Problem it Solves
> redux is a predictable state management library
> redux is an architecture for data flow
> - the store holds the state tree (data for the application)
> - the state tree is then given to the UI (data is passed down via props to components)
> - the component events trigger an action from the action creators to the reducers
> - - there are action types, action creators, and actions
> - the reducer receives the emitted action and will create a new state tree to pass to the store
> - the new state tree is passed to the view, completing the cycle
> there are three big principles with redux
> - redux creates a single source of truth for all of your data
> - state is read-only, so you cannot change the state tree without an action
> - changes are made with pure functions (reducers)

### Objective 2 - Create a Redux Store and Connect it to a React Applications
> create the store
> a reducer is a function that returns an object representing the state tree
> wrap our <App> component in a <Provider> component
> install redux with `npm install react-redux redux`
> ==========================================================
> ` import { createStore } from 'redux';                   `
> ` import { Provider } from 'react-redux';                `
> `                                                        `
> ` function reducer() {                                   `
> `   return {                                             `
> `     title: 'Hello world! I\'m in the Redux store!',    `
> `   }                                                    `
> ` }                                                      `
> `                                                        `
> ` const store = createStore(reducer);                    `
> ` <Provider store={store}> <App/> </Provider>            `

## Objective 3 - Use the Connect Function to Connect React Components to the Redux Store
> we use the `connect()` function to connect a component to the redux store
> instead of exporting the component, we export the `connect()` function call
> the `connect()` function is invoked twice
> - first call, pass in a function and an object
> - second call, pass in the component we're connecting
> `mapStateToProps` is a function that tells `connect()` which pieces of state to pass to the component
> `mapStateToProps` takes in state as an argument
> `mapStateToProps` returns an object of properties getting passed to the component as `props`

## Objective 4 - Write Actions and Action CReators to Describe State Changes
> actions in Redux are packets of information that contain an action type and associated data
> actions have a required `type` property and an optional `payload` property
> the `type` property explains what interaction just happened
> the `type` property should be desrcibed in all caps and underscores
> the `payload` property is the data that goes along with that interaction
> actions are dispatched to the reducer as an argument
> the reducer updates the state according to the `type` and `payload` dispatched by the action
> the reducer is the only method we can use to update our state
> we will want to create an actions directory to store all actions


## Objective 5 - Write Reducers to Respond to Actions and Update State
> reducers are pure functions
> reducers take in the current state tree and an action as arguments
> reducers use a switch case to check the action type of the dispatched action
> reducers create an updated state tree based on the action type and payload
> the updated state tree triggers the UI to re-render with the new data