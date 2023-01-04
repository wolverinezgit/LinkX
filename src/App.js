import React,{useState} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import "../src/App.css";
function App() {

  const [link,setlink]=useState("");
  const [generatedLink,setgeneratedLink]=useState("");
  const [copyToClipboard,setcopyToClipboard]=useState("Copy to clipboard");
const updateUrl = (e)=>{
  
  setlink(e.target.value);
  setcopyToClipboard("Copy to clipboard");

}
const copy = () => {
  
  navigator.clipboard.writeText(generatedLink);
setcopyToClipboard("Copied ✔");
console.log("copied");

};
  const submit=()=>{
    console.log("frontend" +link);
axios.post("https://linker-backend-71xv.onrender.com/",{link:link}).then((response)=>{console.log(response.data.newid);setgeneratedLink("https://linker-backend-71xv.onrender.com/"+response.data.newid)}).catch((error)=>{console.log(error)});

    
  }
  return (
    <div className="App">
    
 
     <div className="container">
         <h1>Shorten URL</h1>
         <div className="form">
         
<input type="text" value={link} id="url" onChange={updateUrl} placeholder="ENTER URL" />
<input type="submit"  onClick={submit} value="Generate"/>
<input type="text" placeholder="" value={generatedLink} />
<input type="submit" id="cpy"  onClick={copy} value={copyToClipboard}/>
         </div>
        
     </div>

</div>
    
  );
}

export default App;



