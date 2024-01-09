import React, { Component } from 'react'
import ButtonContainer from './ButtonContainer'
import Display from './Display'

 class Calculator extends Component {
  constructor(props){
    super(props);
    this.state = {
        inp : "",
        out : 0
    }
    this.btnHandler = this.btnHandler.bind(this); // method binding
}

// main handler function
btnHandler(val) {
  console.log(`btn value =`, val)
  if (val === "C") {
    this.clear()
  } else if (val === "CE") {
    this.masterClear()
  } else if (val === "=") {
    this.calculate()
  } else if (val === "<-") {
    this.backspace()
  } else if (val === "sqrt") {
      this.squareOf()
  }
  else {
    // number , operator
    this.setState({
      inp: this.state.inp + val
    })
  }
}



// clear
clear() {
  this.setState({
    inp: ""
  })
}


// master clear
masterClear(){
    this.setState({
      inp: "",
      out: 0
    })
}

// calculate
calculate() {
  this.setState({
    out: eval(this.state.inp)
  })
}

//backspace
backspace(){
  //let x = this.state.inp.slice(0,-1)
  let x = this.state.inp.substring(0,this.state.inp.length-1)
  this.setState({
    inp: x
  })
}

// sqrt
squareOf(){
  this.setState({
    out: Math.sqrt(this.state.inp)
  })
}

render() {
      return (
        <div className='cal-container'>
          <Display  {...this.state}/>
          <ButtonContainer btnClick={this.btnHandler} />
        </div>
      )
}
}
export default Calculator

