
import Navbar from './components/Navbar';
import Sidebar1 from './components/Sidebar1';
import Sidebar2 from './components/Sidebar2';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  let username="Ratna";
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <h1 style={{ color: 'red' }}>Hello World</h1>
    //   </header>
    // </div>
    // <div>
    //   <h1>{username}</h1>
    //   <p>{100+100}</p>  
    // </div>
    
      <div className='app'>
        <Navbar />
        <Main/>
        <div className='sidebar'>
        <Sidebar1/>
        <Sidebar2 />
        </div>
        <Footer/>
      </div>
  

  );
}

export default App;
