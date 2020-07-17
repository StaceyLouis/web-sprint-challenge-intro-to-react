import React, { useState, useEffect} from "react";
import "./App.css";
import axios from "axios"
import CharContainer from "./components/CharContainer";

function App() {
const [data, setData] =useState([]);

useEffect(() => {
  axios
  .get(`https://rickandmortyapi.com/api/character/`)
  .then(response => {
    console.log(response.data.results);
    setData(response.data.results);
  })
  .catch(error => {
    console.log("errors:", error)
  })
}, []); 

  return (
    <div className="App">
       <h1 className="Header">Characters</h1>
        
       <CharContainer  data={data}/>
  
      
    </div>
  );
}

export default App;
