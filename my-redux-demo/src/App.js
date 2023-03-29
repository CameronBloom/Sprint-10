import './App.css';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    title: state.title,
    races: state.races
  }
}

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <p>{props.title}</p>
        { props.races.map(race => {
          return (
            <>
              <h4>{ race.location } - { race.completed ? "completed!" : "coming soon..." }</h4>
            </>
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

export default connect(mapStateToProps, {})(App)
