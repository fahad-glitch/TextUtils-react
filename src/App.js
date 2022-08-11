import "./App.css";
import React, { useState } from 'react'
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";
// import About from "./Components/About";

function App() {

  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("Enable");
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0f2648';
      setText('Disable')
      showAlert("Dark mode has been Enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setText('Enable')
      showAlert("Light mode has been Enabled", "success");
    }
  }
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }


  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutValue="About" mode={mode} toggleMode={toggleMode} text={text} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route path="/about" element={<About />} /> */}
            {/* <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text below to Analyze" mode={mode} />} /> */}
          {/* </Routes> */}
          <Textform showAlert={showAlert} heading="Enter the text below to Analyze" mode={mode} />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
