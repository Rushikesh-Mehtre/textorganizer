import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been activated", "success");
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been activated", "success");
    }
  };

  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  return (
    <Router>
      <Navbar
        title="Text Organizer "
        about=" About"
        home="Home"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <div className="container my-4">
            <Textform
              showAlert={showAlert}
              heading="Enter your text here"
              label="enter your text here"
              mode={mode}
            ></Textform>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
