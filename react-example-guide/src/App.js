import logo from './logo.svg';
import './App.css';

function Test() {
  return (
    <div className = "Me-testing">
      <p>Hello world! Please print this </p>
      <p>Yo it works</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Test></Test> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React - Let's start!
        </a>
      </header>
    </div>
  );
}

export default App;
