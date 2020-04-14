import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import Image from './nandha.png';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component{


  notify = () => {
    toast.success("msg")
  };

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <button
            onClick = {this.notify}
          >sample</button>
          <ToastContainer 
            autoClose={3000} 
            position= "top-right"
            className= 'toast-success-container'
            closeButton= {false}
            autoClose= {false}
          />
        </header>
      </div>
    );
  }
  
}

export default App;
