import { useEffect, useState } from "react"
import '../style.css';
import { MAX, MIN } from "../constants";
export const ProgressBar = ({value})=>{
     const [percent,setPercent]=useState(value);
     
     useEffect(()=>{
       setPercent(Math.min(MAX,Math.max(value,MIN)))   
     },[value])

 return (
   <div className="progress">
       <span 
       style={{color: percent > 49 ? 'white' : 'black'}}
       >{percent.toFixed()}%</span>   
       <div style={{width: `${percent}%`}}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={percent.toFixed()}
       />
   </div>       

)
}