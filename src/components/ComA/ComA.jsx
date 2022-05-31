import { useState } from "react";
import "./style.css";

export function ComA() {
  let [data, setData] = useState(`Ramit`);
  let [count, setCount] = useState(0);
  function happy() {
    if (data === `Ramit`) {
      setData(`Sukanta`);
    } else {
      setData(`Ramit`);
    }
  }
  function happy1(e) {
    let val = e.target.value;
    if (val === "inc") {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  }

  return (
    <>
      <div>Inside ComA</div>
      <h1>
        <p>{data}</p>
        <p style={{ marginLeft: "5rem" }}>{count}</p>
        <button
          value="inc"
          onClick={happy1}
          style={{ fontSize: "2rem", width: "3rem" }}
        >
          +
        </button>
        <button
          value="dec"
          onClick={happy1}
          style={{ fontSize: "2rem", width: "3rem" }}
        >
          -
        </button>
      </h1>
      <button onClick={happy}>Click Me</button>
    </>
  );
}
