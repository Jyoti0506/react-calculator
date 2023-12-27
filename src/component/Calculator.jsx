import React, { Component } from 'react'
import ButtonContainer from './ButtonContainer'
import Display from './Display'

 class Calculator extends Component {
  constructor(props){
    super(props);
    this.state = {
        inp : "0",
        out : "0"
    }
}
render() {
return (
  <div className='cal-container'>
    <Display  {...this.state}/>
    <ButtonContainer />
  </div>
)
}
}
export default Calculator

