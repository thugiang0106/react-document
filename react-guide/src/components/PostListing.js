import React from "react";

const PostListing = (props) => {
  console.log(props);
  return (
    <>
      <h1>My Blog Post</h1>
      <ul>{props.children}</ul> {/*refer to all children inside PostListing*/}
    </>
  );
};

export default PostListing;