import React, { useState } from "react";
export default function Textform(props) {
  const [text, setText] = useState("");
  const toUppercase = () => {
    console.log("Uppercase was clicked !");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const toLowercase = () => {
    console.log("Uppercase was clicked !");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const clearText = () => {
    console.log("Uppercase was clicked !");
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success");
  };
  const copyText = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text copied to clipboard", "success");
  };

  const removeExtraspaces = () => {
    let newText = text.split(/ [ ] + /);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  const handleOnchange = (event) => {
    console.log("onchange working ! ");
    setText(event.target.value);
  };
  let min1 =
    0.008 *
    text.split(" ").filter((element) => {
      return element.length != 0;
    }).length;
  let min = min1.toFixed(2);
  return (
    <>
      <div className="container">
        <div
          className="mb-3"
          style={{ color: props.mode === "dark" ? "white" : "#042743" }}
        >
          <h1 className="mb-3">{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            placeholder="Enter your text here"
            onChange={handleOnchange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#212529" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
          <button
            className="btn btn-primary mt-3 mx-1 my-1"
            onClick={toUppercase}
            disabled={text.length === 0}
          >
            Convert to UpperCase
          </button>
          <button
            className="btn btn-primary mt-3 mx-1 my-1"
            onClick={toLowercase}
            disabled={text.length === 0}
          >
            Convert to Lowecase
          </button>
          <button
            className="btn btn-primary mt-3 mx-1 my-1"
            onClick={clearText}
            disabled={text.length === 0}
          >
            Clear Text
          </button>
          <button
            className="btn btn-primary mt-3 mx-1 my-1"
            onClick={copyText}
            disabled={text.length === 0}
            disabled={text.length === 0}
          >
            Copy Text
          </button>
          <button
            className="btn btn-primary mt-3 mx-2 my-1"
            onClick={removeExtraspaces}
            disabled={text.length === 0}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length != 0;
            }).length
          }{" "}
          words and {text.length} characters...
        </p>

        <p>{min} mins read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter text in box above to preview it here..."}
        </p>
      </div>
    </>
  );
}
