import './App.css';
import React from 'react'
import Genre from "./components/Genre.js";
import Authors from "./components/Authors.js";
import Translators from "./components/Translators.js";
import Books from "./components/Books.js";
import {Route, Link, BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                {/*<header className="App-header">*/}
                <h1>Welcome to the library!</h1>
                {/*</header>*/}
                <h2>What do you want to do?</h2>
                <ul>
                    <li>
                        <Link to="/books">See the list of all available books.</Link>
                    </li>
                    <li>
                        <Link to="/authors">See the list of all available authors.</Link>
                    </li>
                    <li>
                        <Link to="/translators">See the list of all available translators.</Link>
                    </li>
                    <li>
                        <Link to="/genres">See the list of all available genres.</Link>
                    </li>
                </ul>
                <Route path="/genres" component={Genre}/>
                <Route path="/authors" component={Authors}/>
                <Route path="/translators" component={Translators}/>
                <Route path="/books" component={Books}/>
            </Router>
        </div>
    );
}

export default App;
