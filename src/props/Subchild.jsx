import React from 'react'

const Subchild = () => {
    console.log(this)
  return (
    <div>
        Subchild
        <h1>This is coming from subchild</h1>
    </div>
    
  )
}

export default Subchild