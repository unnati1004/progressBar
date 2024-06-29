import { ProgressBar } from './components/ProgressBar';
import './style.css';
import {useState,useEffect} from "react";
function App() {
const [value,setValue] = useState(0);

useEffect(()=>{
  setInterval(()=>{
    setValue((value)=>value + 1); 
  },100);
},[]);
 
  return (
    <div className="app">
     <span>Progress Bar</span>
     <ProgressBar value={value}/>
    </div>
  );
}

export default App;
