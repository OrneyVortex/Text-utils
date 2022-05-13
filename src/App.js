import React, {useState} from 'react'
import  './App.css';
import Alert from './components/Alert';
//  import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })

  }

  const toggleMode=() =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#05103A';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
       {/* <About/> */}
      <TextForm heading ="Enter your text to analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;
