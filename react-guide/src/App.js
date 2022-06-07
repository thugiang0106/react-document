import "./App.css";
import Post from "./components/ListingItem";
import PostListing from "./components/PostListing";


function App() {
  return (
    <div>
      <PostListing>
        <Post title="My blog post 1" text="blah blah blah">
          <p>This is Amazing</p>
          <p>Im putting a children inside a custom components</p>
        </Post>
      </PostListing>
      <PostListing title= "My heading">
        <Post title="My blog post 1 reuse" text="blah blah blah">
          <p>This is Amazing</p>
          <p>Im putting a children inside a custom components</p>
        </Post>
      </PostListing>
      <MyComponent />
    </div>
  );
}

const MyComponent = () => {
  const onClick = () => {
    alert("Clicked!");
  };

  return <button onClick={onClick}>Buy Me</button>;
};


export default App;
