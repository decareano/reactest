import React, { useState, useEffect } from 'react';
import './App.css';
import ChildComponent from "./ChildComponent"

// class App extends React.Component {   
function App() {

      //const [id, setId] = useState(1)
      const [name, setName] = useState("test")
  
      const onClickHandler = e => {
    
        setName("pinga123");
        
      }
      useEffect(() => {
        console.log('name changed')
      }, [name])
      

      return (   
          <div> 
           <h1> I am the parent component </h1>    
            <h3><ChildComponent  text="i am first child" /></h3>
             <h3><ChildComponent  text="i am second child" /></h3>
             
            
             <h3><ChildComponent  text="i am third child" /></h3>
             <p>Name is: {name}</p>
             <button onClick={onClickHandler}>Increase count</button>

          </div>
      );  
    
}



export default App