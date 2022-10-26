import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./Header";

function App(props) {
  console.log(props);
  const [count, setCount] = useState(0);
  const [post, setPost] = useState({});
  const [postId, setPostId] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    const fetchPost = async () => {
      setIsFetching(true);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      const post = await res.json();
      console.log(post);
      setPost(post);
      setIsFetching(false);
    };
    fetchPost();
  }, [postId]); //untuk mengatasi data di ambil sekali saja pada saat render

  // if (isFetching){
  //   return <h1>Loading...</h1>
  // }

  return (
    <>
      <Header>{props.nama}</Header>
      <h1>{props.nama}</h1>
      <h3>Counter: {postId}</h3>
      <button onClick={(e) => setPostId(postId + 1)}>Berhitung!</button>
      <p></p>
      <p></p>
      {/* {isFetching ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <b>{post.title}</b>
          <p>{post.body}</p>
        </>
      )} */}
      {isFetching && <h1>Loading..</h1>}
      {!isFetching && (
        <>
          <b>{post.title}</b>
          <p>{post.body}</p>
        </>
      )}
    </>
  );
}

App.propTypes = {
  nama: PropTypes.string.isRequired
};

export default App;

//usestate memiliki nilai balikan berupa array
//memasukan nilai balikan dr useState tsb ke dlm variable
