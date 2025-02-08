import React, { Component } from 'react'

export class MyForm extends Component {

    constructor(props){
        super(props)
        this.state={
            textValue:'',
            skillValue:'Skill not declared',
            expValue:'Experience not declared'
        }
    }

    changeMsg=(event)=>{
        this.setState({
            textValue:event.target.value
        })
    }

    changeSkill=(event)=>{
        this.setState({
            skillValue:event.target.value
        })
    }

    changeExp=(event)=>{
        this.setState({
            expValue:event.target.value
        })
    }

    submitted=(event)=>{
        alert("Form is submitted successfully "+`${this.state.textValue} ${this.state.skillValue} ${this.state.expValue}`);
        event.preventDefault();
    }
  render() {
    return (
      <div className='container'>
        <form onSubmit={this.submitted}>
            <label>Student Name:</label>
            <input type="text" value={this.state.textValue} onChange={this.changeMsg}/>
            <br/>
            <label>Skill:</label>
            <select value={this.state.skillValue} onChange={this.changeSkill}>
                <option>React</option>
                <option>SpringBoot</option>
                <option>Node JS</option>
            </select>
            <br/>
            <label>Experience:</label>
            <select value={this.state.expValue} onChange={this.changeExp}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <br/>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default MyForm