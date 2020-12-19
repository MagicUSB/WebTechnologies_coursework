//import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
    /*return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
    );*/
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to the library!</h1>
            </header>
            <h2>What do you want to do?</h2>
            <ul>
                <li>See the list of all available books.</li>
                <li>See the list of all available authors.</li>
                <li>See the list of all available genres.</li>
            </ul>
        </div>
    );
}

export default App;
