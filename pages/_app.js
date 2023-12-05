// `pages/_app.js`
import Home from "../components/Home";
import '../styles/style.css';
import '../styles/bootstrap.min.css';
import Header from "../components/Header";
import Navbar from "../components/Navbar";


function App () {
  
  return <div className="App">
        <Header/>
    <Navbar/>
    <Home/>

  </div>

  
  }

  export default App;