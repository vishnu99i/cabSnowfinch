import './App.css';
import Aboutus from './components/Aboutus';
import Bookingform from './components/Bookingform';
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
      </div>
  )
}

export default App
