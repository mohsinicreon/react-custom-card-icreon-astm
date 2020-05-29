import React from 'react';
import logo from './logo.svg';
import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Testing for publishing NPM with create-react-app
        </a>

        <Card>
          <h1>Hello Developer, <br />I am new card component!!</h1>
        </Card>
      </header>
    </div>
  );
}
export default App;
