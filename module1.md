# Module 1 - The Reducer Pattern
> 

## Key Concepts
> explain the reducer pattern
> implement the reducer pattern

## Essential Questions
> how would you explain what the reducer pattern is and what its benefits are?
> how would you make a reducer and use it in a component?

### General Notes
> a reducer takes in some `previousState` with an `action` and returns the `nextState`
> using the reducer pattern helps us mitigate unintended side effects
> in order to keep state changes their side effects predictable, we follow a convention of immutable state
> redux gives us state management for our whole application
> context api gives us state management for specific sections of the application
> create "reducers" and "actions" folders in the "src" directory
> actions...
> `export const SET_TITLE = "SET_TITLE";            <= action type`
> `export const SET_EDITING = "SET_EDITING";        <= action type`
> `.....................................................................`
> `export const setTitle = (title) => {             <= dispatch function`
> `  return { type: SET_TITLE, payload: title );    <= dispatch function`
> `}                                                <= dispatch function`
> reducers...
> `export const initialState = {                                                         `
> `  title: "Hello World",                                                               `
> `  editing: false,                                                                     `
> `  newTitleText: "",                                                                   `
> `}                                                                                     `
> `......................................................................................`
> `export const reducer = (prevState, action) => {                                       `
> `  switch(action.type) {                                                               `
> `    case(SET_TITLE):                                                                  `
> `      return (...prevState, title: action.payload", newTitleText: "", editing: false) `
> `    case(SET_EDITING):                                                                `
> `      return (...prevState, editing: !prevState.editing)                              `
> `    default:                                                                          `
> `      return (prevState)                                                              `
> `  }                                                                                   `
> `}                                                                                     `

### Objective 1 - Explain What Immutability is in Programming and Demonstrate its Benefits
> redux is built on the programming principle of immutability
> a predictable state management machine limits the impact of unwanted side effects
> immutability tracking makes it easy to track mutations over time
> redux has a single immutable state tree, referred to as the store
> all state changes are explicitly handled by dispatching actions
> dispatched actions are processed by a reducer that accepts the previous state and the action
> dispatched actions return the next state of your application

### Objective 2 - Describe Reducer Functions
> reducer functions take two arguments, the current state and action
> reducer functions return a new, updated state object based on both arguments
> `(state, action) => newState`
> we'll use JavaScript's `switch` statement to make that part of our reducer a lot more readable


## Objective 3 - Employ the useReducer Hook to Manage State in a Component
> the `useReducer` hook is an alternative to `useState` (`useState` actually uses `useReducer` hook under the hood)
> the `useReducer` hook is preferred when you have more complex logic or more than 3 state properties
> `const [state, dispatch] = useReducer(reducer, initialState);`
> the dispatch method is a significant addition to our arsenal here
> it will "dispatch" an action to our reducer when specific events occur in our application
> the `useReducer` hook has all the functionality of the `useState` hook with the power of the reducers we build