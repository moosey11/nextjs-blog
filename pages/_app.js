// `pages/_app.js`
import Header from "../components/Header.js";
import Navbar from "../components/Navbar.js";
import Home from "../components/Home.js";
import Footer from "../components/Footer.js";
import '../styles/style.css';
import '../styles/bootstrap.min.css';

function App () {
  return ( 
  <div>

    <Header/>
    <Navbar/>
    <Home/>
    <Footer/>

  </div>

  );
  }

  export default App;

