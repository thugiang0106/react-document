## REACT Components

– Vanilla JS

```
function Avengers() {
    const app = document.querySelector("#app");
    const el = document.createElement("div);
    const name = document.createElement("p");
    name.textContent = "Iron Man";
    app.appendChild(el);
} //work but cumbersome and gets complex quickly

```

– REACT component

```
<div>
   <Avenger name = "Ironman"></Avengers>
   
</div> // write the same function like JS but much more simple
```

– Please visit React website for document: https://reactjs.org/

---

### REACT renders

```
ReactDOM.render(
    <helloMessage name= "Taylor" />,
    document.getElementById("hello-example")
),
```


```
ReactDOM.render(
    // React component (JSX),
    //render into this DOM element (vanilla JS)
)
```

---

## Anatomy of a REACT component

– Below is the anatomy of REACT component (declarative)
– REACT is declarative is because you describe what you want it to look like and it takes care of complex codes behind the scene. JQuery is imperative because you have to do the work by yourself -> it can be complex and escalated quickly

```
import React from "react";

function Avenger() {
    return(
        <p>Iron Man</p>
    ) //normal JS function
}
```