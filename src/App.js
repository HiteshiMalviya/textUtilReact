import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState ('light')

  const [modeText, setModeText] = useState ("Enable DarkMode")

  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert ({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }


  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      setModeText('Disable DarkMode')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode is enabled", "success")
      document.title = 'Textutils - DarkMode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      setModeText('Enable DarkMode')
      showAlert("Light mode is enabled", "success")
      document.title = 'Textutils - LightMode'
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} modeText={modeText}/>
    <Alert alert={alert} ></Alert>
    <div className='container my-3' >
      <Routes>
          <Route exact path="/about" 
          element={<About/>} />     
          <Route exact path="/"
          element={<TextForm heading={"Enter the text to analyze"} mode={mode} showAlert={showAlert}/>}/>  
      </Routes>
      {/* <About></About> */}  
    </div>
    </Router>
   </>
  );
}

export default App;
