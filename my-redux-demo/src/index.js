import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';

function reducer() {
  return {
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
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
