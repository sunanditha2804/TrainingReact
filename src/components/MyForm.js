import React, { Component } from 'react'

export class MyForm extends Component {

    constructor(props){
        super(props)
        this.state={
            textValue:'',
            skillValue:''
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

  render() {
    return (
      <div className='container'>
        <form>
            <label>Student Name:</label>
            <input type="text" value={this.state.textValue} onChange={this.changeMsg}/>
            <br/>
            <label>Skill</label>
            <select value={this.state.skillValue} onChange={this.changeSkill}>
                <option>React</option>
                <option>SpringBoot</option>
                <option>Node JS</option>
            </select>
        </form>
      </div>
    )
  }
}

export default MyForm