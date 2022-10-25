import React, { useState } from "react";
import PropTypes from "prop-types";
import Header from "./Header";

function App(props) {
  console.log(props);
  const [count, setCount] = useState(0);
  return (
    <>
      <Header>{props.nama}</Header>
      <h1>{props.nama}</h1>
      <h3>Counter: {count}</h3>
      <button onClick={(e) => setCount(count + 1)}>Berhitung!</button>
    </>
  );
}

App.propTypes = {
  nama: PropTypes.string.isRequired
};

export default App;

//usestate memiliki nilai balikan berupa array
//memasukan nilai balikan dr useState tsb ke dlm variable
