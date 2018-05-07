import React, { Component } from 'react';
import Calculadora from './components/Calculadora/Calculadora';

class App extends Component{
  render(){
    return(<div>
    <Calculadora valor={5}/>
    <Calculadora valor1={15}/>
    </div>)
  }
}

export default App