
// import Navbar from './components/Navbar';
// import Sidebar1 from './components/Sidebar1';
// import Sidebar2 from './components/Sidebar2';
// import Main from './components/Main';
// import Footer from './components/Footer';
// import CBCPropEx from './props/CBCPropEx';
// import FBCPropsEx from './props/FBCPropsEx';
import CBCAssignment from "./components/CBCAssignment"
import ClassComponents from "./components/ClassComponents"
import FunctionalComponent from "./components/FunctionalComponents"
import MyForm from "./components/MyForm"
import RefExamples from "./hookex/RefExamples"
import UseEffectEx from "./hookex/UseEffectEx"
import Child1 from "./props/Child1"
import PropChildEx from "./props/PropChildEx"
import Subchild from "./props/Subchild"
import CBCStateEx from "./stateexample/CBCStateEx"
import FBCStateEx from "./stateexample/FBCStateEx"


// function App() {
//   let username="Ratna";
//   return (
    // <div className="App">
    //   <header className="App-header">
    //     <h1 style={{ color: 'red' }}>Hello World</h1>
    //   </header>
    // </div>
    // <div>
    //   <h1>{username}</h1>
    //   <p>{100+100}</p>  
    // </div>
    
      // <div className='app'>
      //   <Navbar />
      //   <Main/>
      //   <div className='sidebar'>
      //   <Sidebar1/>
      //   <Sidebar2 />
      //   </div>
      //   <Footer/>
      // </div>

      // <div>
        {/* <CBCPropEx username="Ratna" 
        age={20} 
        hobbies={["Playing","reading books"]}
        address={{city:"Hyderabad",state:"Telangana"}}
        sendFun={function() {alert("Hello")}}/> */}
        // <FBCPropsEx
//         username="Abhinay"
//         isMarried={true}
//         hobbies={["Chatting","Reading","Eating","Sleeping"]}
//         />
//       </div>
//   );
// }


// export default App;


// import React from 'react';


// const App = () => {
//   return (
//     <div>
//       <PropChildEx num={100}/>
//       <h1>This is dat coming from props children</h1>
//       <Subchild/> <br/>
//       <Child1/>
      
//     </div>
//   )
// }

// export default App


// import React from 'react'

const App = () => {
  return (
    <div>
      {/* <CBCStateEx/> */}
      {/* <FBCStateEx/> */}
      {/* <FunctionalComponent/> */}
      {/* <CBCAssignment/> */}
      {/* <ClassComponents/> */}
      {/* <MyForm/> */}
      {/* <UseEffectEx/> */}
      <RefExamples/>
    </div>
  )
}

export default App