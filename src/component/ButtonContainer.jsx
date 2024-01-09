import React, { Component } from 'react'
import Button from './Button'

class ButtonContainer extends Component {
  render() {
    return (
      <div className='btn-container'>
        <Button clickHandler={this.props.btnClick} btnClass="btn red" txt="CE"/>
        <Button clickHandler={this.props.btnClick} btnClass="btn op" txt="%"/>
        <Button clickHandler={this.props.btnClick} btnClass="btn red" txt="C"/>
        <Button clickHandler={this.props.btnClick} btnClass="btn del" txt="<-"/>
        <Button clickHandler={this.props.btnClick} btnClass="btn " txt="e"/>
        <Button clickHandler={this.props.btnClick} btnClass="btn " txt="sqrt"/>
        <Button clickHandler={this.props.btnClick} btnClass="btn " txt="cbrt"/>
        <Button clickHandler={this.props.btnClick} btnClass="btn " txt="+-"/>
        <Button clickHandler={this.props.btnClick} btnClass="btn" txt="7"/>
        <Button clickHandler={this.props.btnClick} btnClass="btn" txt="8"/>
        <Button clickHandler={this.props.btnClick} btnClass="btn" txt="9"/>
        <Button clickHandler={this.props.btnClick} btnClass="btn op" txt="*"/>
        <Button clickHandler={this.props.btnClick} btnClass="btn" txt="4"/>
        <Button clickHandler={this.props.btnClick} btnClass="btn" txt="5"/>
        <Button clickHandler={this.props.btnClick} btnClass="btn" txt="6"/>
        <Button clickHandler={this.props.btnClick} btnClass="btn op" txt="-"/>
        <Button clickHandler={this.props.btnClick} btnClass="btn" txt="1"/>
        <Button clickHandler={this.props.btnClick} btnClass="btn" txt="2"/>
        <Button clickHandler={this.props.btnClick} btnClass="btn" txt="3"/>
        <Button clickHandler={this.props.btnClick} btnClass="btn op" txt="+"/>
        <Button clickHandler={this.props.btnClick} btnClass="btn op" txt="/"/>
        <Button clickHandler={this.props.btnClick} btnClass="btn" txt="0"/>
        <Button clickHandler={this.props.btnClick} btnClass="btn" txt="."/>
        <Button clickHandler={this.props.btnClick} btnClass="btn equal" txt="="/>
      </div>
    )
  }
}

export default ButtonContainer