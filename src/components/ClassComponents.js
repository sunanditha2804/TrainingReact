import React from 'react'
import './Styles.css'

class ClassComponents extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: 'Hello!!!'
      };
    }
  
    render() {
      return (
        <div>ClassComponents
          <h1>{this.state.message}</h1>
        </div>
      );
    }
  }

export default ClassComponents