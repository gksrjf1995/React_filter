import './App.css';
import { useEffect, useState } from 'react';

import Table from "./Table"
import axios from 'axios';

function App() {
  
  
  const [query , setquery] = useState("");
  const [data , setdata] = useState([]);
  console.log(data);

  useEffect(()=>{
    const fetching = async() => {
      const res = await axios.get(`http://localhost:4000?q=${query}`)
      setdata(res.data);
    };
    fetching();
  },[query]);
  
  return (
    <div className="App" style={{height : "auto" , backgroundColor : "black" , color : "wheat"}}>
      <input type={"text"} placeholder="Text" onChange={e=>setquery(e.target.value)}/>
      {<Table data={data}/>}
     
      
    </div>
      
       
   
      
   
  );
}

export default App;
