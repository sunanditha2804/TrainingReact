import React, { useEffect, useState } from 'react'

const UseEffectEx = () => {
    // const [count,setCount]=useState(0)
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setCount(100)
    //     },5000);
    //     document.title="MRU";        
    // },[])

    const [users,setUSers]=useState([]);
    console.log(users)
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json().then(data=>{
            // console.log(data)
            setUSers(data);
        }))
        .catch(err=>console.log(err))
    },[])

  return (
    <div>UseEffectEx
        {/* <h1>{count}</h1> */}
        {
            users.map((user,index)=>{
                return(
                    // <div key={index}>
                    //     <h3>{index+1}</h3>
                    //     <h1>{user.name}</h1>
                    //     <h6>{user.email}</h6>
                    //     <br />
                    // </div>
                    <React.Fragment key={index}>
                        <h3>{index+1}</h3>
                        <h1>{user.name}</h1>
                        <h6>{user.email}</h6>
                        <br />
                    </React.Fragment>
                )
            })
        }
    </div>
  )
}

export default UseEffectEx