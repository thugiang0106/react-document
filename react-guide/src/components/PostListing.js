import React from "react";

const PostListing = (props) => {
 
  return (
    <>
      <h1>{ props.title}</h1>
      <ul>{props.children}</ul> {/*refer to all children inside PostListing*/}
    </>
  );
};

export default PostListing;