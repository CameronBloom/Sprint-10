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

### Objective 2 - Create a Redux Store and Connect it to a React Applications
> 

## Objective 3 - Use the Connect Function to Connect React Components to the Redux Store
> 

## Objective 4 - Write Actions and Action CReators to Describe State Changes
> 

## Objective 5 - Write Reducers to Respond to Actions and Update State
> 