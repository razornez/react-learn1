import "./styles.css";

export default function App2() {
  const className = "App";
  const helloTitle = "Hello codesandbox";
  const description = "testtt haloo!";

  const handleClick = (e) => {
    console.log("Button Clicked !");
  };
  return (
    <div className={className}>
      <h1 style={{ color: "red", textAlign: "left" }}>{helloTitle}</h1>
      <h2>{description}</h2>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

// attribute harus camelCase
// pemanggilan variable menggunakan {namavariable/fungsi}
// inline css harus object {{color: 'red', textAlign: 'left'}}
