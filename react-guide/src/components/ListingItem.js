import React from "react"; //MUST have

//({title, text}): destructuring of props
const Post = (props) => {
  return (
    <li>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
      {/*Destructuring props. text = props.text */}
    </li>
  );
};

export default Post; //only export Post function
