import "./styles.css";
// import { ComA } from "./components/ComA/ComA";
// import ClassBasedComA from "./components/ClassBasedComponents/ClassBasedComA";
// import Vid11 from "./components/ClassBasedComponents/Vid13_ClassComponent";
// import Student1 from "./components/props/Student";
import Student2 from "./components/props/PropsInClassedBasedComponents";

export default function App() {
  return (
    <>
      {/* <ComA /> */}
      {/* <ClassBasedComA /> */}
      {/* <Vid11 /> */}
      <Student2 name={`"Sukanta"`} classss={`"2nd Year"`} mind={`"Halkat"`} />
    </>
  );
}
