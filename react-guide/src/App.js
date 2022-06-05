import "./App.css";

function App(props) {
  return (
    <div className="App intro">
      <h1>{props.title}</h1> 
      <p>{props.description}</p>
    </div>
  );
}

function MyComponent() {
  return <App title="Hello World" description="I am a component" />;
}

export default MyComponent;
