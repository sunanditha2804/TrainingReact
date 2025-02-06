// import React, { Component } from 'react'

// export default class CBCStateEx extends Component {
//   render() {
//     return (
//       <div>CBCStateEx</div>
//     )
//   }
// }

// state examples

// import React from 'react'

// const CBCStateEx = () => {
//     constructor(){
//         super();
//         this.state=null;
//     }
//     console.log(this.state)
//   return (
//     <div>CBCStateEx</div>
//   )
// }

// export default CBCStateEx
// CBCStateEx c=new CBCStateEx();

import React, { Component } from "react";

export default class CBCStateEx extends Component {
  constructor() {
    super();
    this.state = {
        users:["Ratna","Raj","Rakesh","Rajesh"],
        num:100
    };
  }
  changeNumber=()=>{
    this.setState({num:(this.state.num+100)})
  }
  decrement=()=>{
    this.setState({num:(this.state.num-100)})
  }
  render() {
    console.log(this);
    return (
    <div>
        {
            this.state.users.map((user,i)=>{
                return <li key={i}>{user}</li>
            })
        }
            <h1>{this.state.num}</h1>
            <button onClick={this.decrement}>Decrement</button>
            <button onClick={this.changeNumber}>Increment</button>
        
    </div>
    )
  }
}
