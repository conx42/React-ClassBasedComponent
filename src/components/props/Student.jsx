import { useState } from "react";
export default function Student(props) {
  const [namee, setNamee] = useState(props.name);
  return (
    <>
      <h1>Student Component :)</h1>
      <h1>Hello {namee}</h1>
      <button
        onClick={() => {
          if (namee === `Ramit`) {
            setNamee(`Sukanta`);
          } else {
            setNamee(`Ramit`);
          }
        }}
      >
        Click
      </button>
    </>
  );
}
