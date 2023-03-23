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

### Objective 1 - Explain Class Components, and Use a Class Component to Render Some State Data to the DOM
>

### Objective 2 - Share Data Between Components Using State and Props
> 

## Objective 3 - Respond to Events Triggered by User Interaction and Handle User Input via Forms in React
> 