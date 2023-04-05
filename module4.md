# Module 4 - Context API
> the context API allows you to access data at different levels of a component tree without passing down through props

## Key Concepts
> context API explanation
> context API creation
> context API use

## Essential Questions
> how do you use the context API?
> how do you state where the context API is unusable?
> how do you use the context API within a component?

### General Notes
> application level state => redux using actions and reducers
> context level state => context API defines a tree of components that share state
> component level state => `useState` hook
> the context API takes a more modular approach to state management via a storage piece and customized approaches
> redux = store (state container) + reducers (state managers) + actions (state triggers) + provider (connect app to store)
> context = single shared state container
> we can create the context with the `createContext` hook
> we can use the context with the `useContext` hook

### Objective 1 - Describe What the Context API is and the Problem it Solves
> in a typical React application, data is passed top-down (parent to child) via props
> this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components 
> the context API provides a way to share values like these between components without having to pass props to every level
> the context API is used when there is global data that many components share (things like user or theme) 
> the context API is used when we have to pass data through intermediate components
> the context API can help keep your state relatively clean
> the context API can make components harder to reuse

### Objective 2 - Provide Data to the Component Tree With a Context Provider
> ...

### Objective 3 - Consume Data from a Context Object in Nested Components
> ...