import React, {Component} from 'react'
import classes from './Calculadora.css'

export default class Calculadora extends Component{
    state = {
        cont: this.props.valor
    }
    state1= {
        cont1: this.props.valor1
    }

    resultado={
        result = 0
    }

    suma=()=>{
        this.setState({
            result: this.state.cont + this.state1.cont1
        })
    }

    restar=()=>{
        this.setState({
            result: this.state.cont - this.state1.cont1
        })
    }

    
    render(){
        return(<div className={classes.Calculadora}>
            <h1>Calculadora</h1>
            <p>Numero1 {this.props.valor}</p>
            <p>Numero2 {this.props.valor1}</p>
            <p>Resultado : {this.props.resultado}</p>
            <button onClick={this.sumar}>Sumar</button>
            <button onClick={this.restar}>Restar</button>

        </div>)
    }
}
