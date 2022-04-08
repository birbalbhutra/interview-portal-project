import { useState } from "react";
import "../whiteboard/Whiteboard.css";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { createRef } from "react";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import ClearIcon from "@mui/icons-material/Clear";
import BackspaceIcon from "@mui/icons-material/Backspace";

const styles = {
  border: "0.0625rem solid #9c9c9c",
  borderRadius: "0.25rem",
  boxShadow: "white 0px 5px 15px",
};

function Whiteboard() {
  let [penColor, setPenColor] = useState("#fff");
  let [penWidth, setPenWidth] = useState(3);
  let canvas = createRef();

  function undo() {
    canvas.current.undo();
  }

  function redo() {
    canvas.current.redo();
  }

  function clearCanvas() {
    canvas.current.clearCanvas();
  }

  function colorChange() {
    setPenColor(document.getElementById("color-picker").value);
  }

  function eraserType() {
    canvas.current.eraseMode(true);
  }

  function pencilType(width) {
    canvas.current.eraseMode(false);
    setPenWidth(width.target.value);
  }

  return (
    <div>
      <div className="whiteboard-title">DESIGN BEFORE CODE</div>
      <ReactSketchCanvas
        className="board"
        ref={canvas}
        style={styles}
        height="40rem"
        strokeWidth={penWidth}
        strokeColor={penColor}
        canvasColor="black"
      />
      <div className="toolbar">
        <div>
          <label htmlFor="pencil">Pencil Size : </label>
          <select onChange={pencilType}>
            <option value="1">Small</option>
            <option value="3" selected>
              Medium
            </option>
            <option value="6">Large</option>
          </select>
        </div>
        <div className="tool">
          <UndoIcon onClick={undo} />
          <p className="toolname">Undo</p>
        </div>
        <div className="tool">
          <RedoIcon onClick={redo} />
          <p className="toolname">Redo</p>
        </div>
        <div className="tool">
          <ClearIcon onClick={clearCanvas} />
          <p className="toolname">Clear</p>
        </div>

        <input
          type="color"
          id="color-picker"
          defaultValue="#ffffff"
          onChange={colorChange}
        ></input>
        <div className="tool">
          <BackspaceIcon onClick={eraserType} />
          <p className="toolname">Erase</p>
        </div>
      </div>
    </div>
  );
}

export default Whiteboard;
