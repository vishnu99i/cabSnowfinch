import './App.css';
import Aboutus from './components/Aboutus';
import Bookingform from './components/Bookingform';
import Carbooking from './components/Carbooking';
import CTA from './components/CTA';
import Header from './components/Header';
import Hotelplace from './components/Hotelplace';
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
        <CTA />
        <Hotelplace />
      </div>
  )
}

export default App
