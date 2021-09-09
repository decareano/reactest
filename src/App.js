import React, { useState, useEffect } from 'react';
import './App.css';
import ChildComponent from "./ChildComponent"

// class App extends React.Component {   
function App(props) {

      const [id, setId] = useState(1)
      const [name, setName] = useState("test")
  
      const onClickHandler = (e) => {
    
        setName("test123")
        setId(3)
        
      }
      useEffect(() => {
        console.log('name changed')
      }, [id, name])
      

      return (   
          <div> 
           <h1> I am the parent component </h1>    
            <h3><ChildComponent  text="i am first child" /></h3>
             <h3><ChildComponent  text="i am second child" /></h3>
             
            
             <h3><ChildComponent  text="i am third child" /></h3>
             <p>Hello, {name}</p>
             <p>The id is now: {id}</p>
             <button onClick={onClickHandler}>Increase count</button>

          </div>
      );  
    
}



export default App