import { TOGGLE_RACE_COMPLETED } from "../actions";

// define the initial state
const initialState = {
  title: 'Hello world! I\'m in the Redux store!',
  teams: [
    {name: 'Alfa Romeo', points: 4 },
    {name: 'AlphaTauri', points: 0 },
    {name: 'Alpine', points: 8 },
    {name: 'Aston Martin', points: 38 },
    {name: 'Ferrari', points: 26 },
    {name: 'Haas', points: 1 },
    {name: 'McLaren', points: 0 },
    {name: 'Mercedes', points: 38 },
    {name: 'Red Bull', points: 87 },
    {name: 'Williams', points: 1 }
  ],
  drivers: [
    { name: 'Verstappen', points: 44, teamsIndex: 8 },
    { name: 'Pérez', points: 43, teamsIndex: 8  },
    { name: 'Alonso', points: 30, teamsIndex: 3  },
    { name: 'Sainz', points: 20, teamsIndex: 4  }
  ],
  races: [
    { location: 'Bahrain', completed: true },
    { location: 'Saudi Arabia', completed: true },
    { location: 'Australia', completed: false },
    { location: 'Azerbaijan', completed: false }
  ]
}

// create the reducer function
export const reducer = (state = initialState, action) => {

  // check for the action type with a switch statement
  switch (action.type) {
    
    // make a case for each action type
    case TOGGLE_RACE_COMPLETED:
      console.log(`reducer case reached!`);
      return {
        ...state,
        races: state.races.map((race) => {
          if (race.location === action.payload) {
            return { ...race, completed: !race.completed }
          } else {
            return race;
          }
        })
      }
    // by default we return the state untouched
    default:
      return state;
  }
};