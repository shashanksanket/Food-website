import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu'
import Events from './components/Events';
import Reservation from './components/Reservation.js'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <>
        <Navbar/>
        <Home/>
        <Menu/>
        <Events/>
        <Reservation/>
        <Footer/>

      </>
    </div>

  );
}

export default App;
