import './App.css';
import Aboutus from './components/Aboutus';
import Bookingform from './components/Bookingform';
import Carbooking from './components/Carbooking';
import Header from './components/Header';
import Hotelbooking from './components/Hotelbooking';
import Intro from './components/Intro';

function App() {

  return (
      <div>
        <Header />
        <Intro />
        <Bookingform />
        <Aboutus />
        <Hotelbooking />
        <Carbooking />
      </div>
  )
}

export default App
