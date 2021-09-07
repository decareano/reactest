import React from 'react';
import './App.css';
import ChildComponent from "./ChildComponent"

class App extends React.Component {    
    render() {    
        return (   
          <div> 
           <h1> I am the parent component </h1>    
            <h3><ChildComponent  text="i am first child" /></h3>
             <h3><ChildComponent  text="i am second child" /></h3>
             
            
             <h3><ChildComponent  text="i am third child" /></h3>
          </div>
        );  
    }
}



export default App