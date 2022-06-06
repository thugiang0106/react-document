import React from "react"; //MUST have

const Post = ({ title, text }) => {
  return (
    <li>
      <h1>{title}</h1>
      <p>{text}</p>
      {/*Destructuring props. text = props.text */}
    </li>
  );
};

export default Post; //only export Post function
