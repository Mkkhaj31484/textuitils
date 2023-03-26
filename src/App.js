//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/textArea';
// import About from './components/About';
import Alert from './components/Alert';
import React,{useState} from 'react';
function App() {
  const [mode, setMode] = useState('dark');
  const[DarkMode,setDarkMode] = useState('Enable Lightmode')
  const[alert,setAlert] = useState("")
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert("");
    }, 1500);
  }
  let toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light')
      setDarkMode('Enable DarkMode')
      document.body.style.backgroundColor='skyBlue';
      showAlert('Light Mode Enabled','success');
    }else{
      setMode('dark')
      setDarkMode('Enable LightMode')
      document.body.style.backgroundColor='Indigo';
      showAlert('Dark mode enabled','success')
    }

  }
  return (
  
    <>    
    <Navbar  alert = {alert} mode = {mode} toggleMode = {toggleMode} DarkMode = {DarkMode}/>
    <Alert alert = {alert}/>
    <TextArea mode = {mode}  alert = {alert} showAlert = {showAlert}heading ="Enter Your Text Here" comment ="Leave Your Comments Here" /> 
    {/* <About/>  */}
    
    </>
  );
}

export default App;
