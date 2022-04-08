import React, { useRef, useState } from "react";
import axios from "axios";
import "../compiler/Compiler.css";

function Compiler() {
  const [script, setScript] = useState("");
  const [lang, setLang] = useState("c 5");
  const [stdin, setStdin] = useState("");
  const [output, setOutput] = useState();

  const runCodeHandler = (e) => {
    const language = lang.split(" ");
    const data = {
      stdin: stdin,
      script: script,
      language: language[0],
      versionIndex: language[1],
      clientId: "",
      clientSecret: "",
    };
    axios.post(`http://localhost:8080/code`, data).then((res) => {
      console.log(data);
      setOutput(
        "Output \n\n" +
          res.data.output +
          "\nMemory : " +
          res.data.memory / 1000 +
          " MB" +
          "\nCPU Time : " +
          res.data.cpuTime
      );
      console.log(res);
    });
  };

  const languageHandler = (e) => {
    setLang(e.target.value);
  };

  const scriptHandler = (e) => {
    setScript(e.target.value);
  };

  const stdinHandler = (e) => {
    setStdin(e.target.value);
  };

  return (
    <div>
      <div className="compiler-title">COMPILER</div>
      <div className="lang-option">
        <label htmlFor="language">Choose Language : </label>
        <select onChange={languageHandler}>
          <option value="c 5">C</option>
          <option value="cpp17 0">C++</option>
          <option value="java 4">Java</option>
          <option value="python3 4">Python</option>
        </select>
      </div>
      <textarea
        id="textbox"
        onChange={scriptHandler}
        className="code-box"
        name="code"
      ></textarea>
      <button className="btn" onClick={runCodeHandler}>
        Run Code
      </button>
      <div className="std-boxes">
        <div className="boxes">
          <label htmlFor="input">Input : </label>
          <textarea
            className="output-box"
            name="input"
            onChange={stdinHandler}
          ></textarea>
        </div>
        <div className="boxes">
          <label htmlFor="output">Output : </label>
          <textarea
            value={output}
            className="output-box"
            name="output"
            disabled
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Compiler;
