import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";
import App2 from "./App2";

//tag name
const element = <h1>Hello World</h1>;

//component
const element2 = <App nama="React apps" />;

//react fragment
const element3 = (
  <React.Fragment>
    <h1>Hello World!</h1>
    <h2>Dunia!</h2>
    <p>React is amazing</p>
  </React.Fragment>
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App2 />
    {element2}
  </StrictMode>
);

//<React.Fragment> bisa di singkat jadi <>
//input data dari sebuah parameter disebut props
//dan memiliki return value berupa react element
//sebuah komponen dapat menerima inputan data melalui props
//props: data diberikan dari luar component
//misal dari komponen lain (component induk)
//yang memanggil component tsb

//state: data yang berada dalam komponen
//dan dikelola oleh komponent itu sendiri
//gunakan useState hook utk membuat state
