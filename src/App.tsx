import logo from './logo.svg';
import './App.css';

import type { ChildApp } from 'mfe-types';

const App: ChildApp = ({ info = { name: "<No name supplied>", age: 0 } }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to {info.name} who is {info.age} years old.
        </p>
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

export default App;
