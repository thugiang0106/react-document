import "./App.css";
import Post from "./components/ListingItem";
import PostListing from "./components/PostListing";
import SelectCategories from "./components/Eventhandler";

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
      
      {/* Event handler */}
      <div>
        <button onClick={() => { alert("hello") }}>HELLO</button>
      </div>
      <SelectCategories option1Value="all" changeCategory={changeCategory} />
    </div>
  );
}

//Event Handler
const MyComponent = () => {
  const onClick = () => {
    alert("Clicked!");
  };

  return <button onClick={onClick}>Buy Me</button>;
};

const changeCategory = (event) => {
  alert(`Selected! ${event.target.value}`);
};

//Array method
const products = [
  {
    name: "The DONATELLO",
    unit_amount: 8500,
    category: "sunglasses",
  },
  {
    name: "The GOBBY",
    uni_amount: 8000,
    category: "sunglasses",
  },
  {
    name: "EXPERT ONLY ",
    uni_amount: 6000,
    category: "accessories",
  },
];

let filteredProducts = [];



//push only category " sunglasses" objects
// for (const product of products) {
//   if (product.category === "sunglasses") {
//  filteredProducts.push(product)
//   }

// }

//filter does the same thing but neater
//filter takes a call back function 
//filter will return a boolean true or false based on return statement
//this is a shorthand filter method
filteredProducts = products.filter(
  (product) => product.category === "sunglasses"
)

// filteredProducts = products.filter(
//   (product) => { return product.category === "sunglasses"; }
// );



//MAP: loop through an array
//map will give you a new array and doesn't update the old array
//loop through each item one by one and create a new array. new array has the same amount of items like original array. 
// const newProducts = products.map((product) => {
// return newProduct;
// })

// Event handler
// const onClick = (msg) => {
//   return msg;
// };


 // callback function: run AFTER another function has finished
// const runResult = (callback) => {
//   const result = callback("onClick has run");
//   console.log(result)
// }

//  runResult((msg) => {
//   return msg;
//  });

const myDisplayer = (something) => {
  console.log(something);
}

const myCalculator = (num1, num2, myCallback) => {
  const sum = num1 + num2;
  myCallback(sum);
} 

myCalculator(5, 12, myDisplayer);


// Filter and array
const arrayOfWords = ['map', 'filter', 'loop', 'condition', 'operator', 'function', 'object', 'callback']

const result = arrayOfWords.filter(word => word.length > 6)


// API: 
//async await: fetch API

// const getPosts = async () => {
//   console.log(1);
//   const url = `http://jsonplaceholder.typicode.com/posts`;
// }

//Await the response from Fetch
//const response = await fetch(url);

//convert the response to JSON
//const posts = await response.json();

//then syntax
// const fetchGot = () => {
//   fetch("https://jsonplaceholder.typicode.com/todos/1").then((result) => {
//     console.log("1.When will this run?");
//   });

//   console.log("2.When will this run?")
// };
// fetchGot(); //order 2.When will this run? -> 1.When will this run
//-> run 2 first and then when promises is done, it will execute 1

//promise
// const fetchGot1 = () => {
//   const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//  console.log("1.When will this run?");
//   console.log("2.When will this run?");
// };
// fetchGot1();

//1 comes first and then 2. JS is pausing everything until the link is completed, and then 1 and 2 will run in order

export default App; 
