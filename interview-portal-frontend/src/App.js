import { useState } from "react";
import Compiler from "./components/compiler/Compiler";
import Navbar from "./components/navbar/Navbar";
import Whiteboard from "./components/whiteboard/Whiteboard";
import "./App.css";

function App() {
  let [isCompiler, setIsCompiler] = useState("whiteboard");

  const changeView = (data) => {
    // console.log(data);
    setIsCompiler(data);
  };

  return (
    <div>
      <Navbar changeView={changeView} />
      {isCompiler === "whiteboard" && <Whiteboard />}
      {isCompiler === "compiler" && <Compiler />}
    </div>
  );
}

export default App;
