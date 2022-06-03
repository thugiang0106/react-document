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