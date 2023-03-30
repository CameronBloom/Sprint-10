// action type
export const TOGGLE_RACE_COMPLETED = "TOGGLE_RACE_COMPLETED";

// action creator (function takes in a boolean value)
export const toggleRaceCompleted = completed => {
  console.log(completed.target);
  
  // return an action with a type and payload
  return {
    type: TOGGLE_RACE_COMPLETED,
    payload: true
  }
}