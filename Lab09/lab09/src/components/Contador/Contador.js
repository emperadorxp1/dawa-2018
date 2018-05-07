import React, {Component} from 'react'

export default class Contador extends Component{
    render(){
       let advertencia = (<p>Iniciamos con numero mayor a 5!</p>)
       if(this.props.valor<=5) advertencia = null
       return(<div>
           <h1>Este es mi componente de contador</h1>
           <p>Este contador iniciara en: {this.props.valor}</p>
           {advertencia}
        </div>)
    }
}