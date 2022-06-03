//Vanilla JS vs REACT components
// function Avengers() {
//     const app = document.querySelector("#app");
//     const el = document.createElement("div");
//     const name = document.createElement("p");
//     name.textContent = "Iron Man";
//     app.appendChild(el);
// } // very cumbersome and gets complex quickly

//REACT components
/* <div>
   <Avenger name = "Ironman"></Avengers>

</div> */

// ---> same meaning but REACT makes it way better to understand and easier to read



//REACT render
ReactDOM.render(
    <helloMessage name="Taylor" />, // html you want to push on the page
    document.getElementById("hello-example") 
);



ReactDOM
  .render(
  // React component (JSX),
  //render into this DOM element (vanilla JS). makes it 
  );