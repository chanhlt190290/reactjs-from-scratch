import React, { Component} from "react";
import "./App.css";
import { hot } from 'react-hot-loader';

class App extends Component{
  componentDidMount(){
    fetch('/api/hello').then(function(response){
      response.text().then(function(text){
        alert(text);
      })
    }).catch(function(err){
      alert(err);
    });
  }
  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
      </div>
    );
  }
}

export default hot(module)(App);
