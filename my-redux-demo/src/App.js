import './App.css';
import { connect } from 'react-redux';
import { toggleRaceCompleted } from './actions';

// take in state and return an object of props
const mapStateToProps = state => {
  return {
    title: state.title,
    teams: state.teams,
    drivers: state.drivers,
    races: state.races,
  }
}

function App(props) {
  // don't forget to destructure...
  const { title, races, toggleRaceCompleted } = props;
  
  return (
    <div className="App">
      <header className="App-header">
        <p>{title}</p>
        { races.map((race, idx) => {
          return (
            <div key={idx} onClick={ () => toggleRaceCompleted(race, idx) }>
              <h4>{ race.location } - { race.completed ? "completed!" : "coming soon..." }</h4>
            </div>
          )
        })}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// connect our props to the app component
export default connect(mapStateToProps, { toggleRaceCompleted })(App)
