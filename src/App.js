
import './App.css';
import Notification from './components/NotificationComponent/Notification';
import Signup from './components/SignupComponent/Signup';
import Testimonial from './components/TestimonialComponent/Testimonial';
import Watch from './components/WatchComponent/Watch';

function App() {
  return (
    <div className="App">
      <div className='left-container'>
        <Notification/>
        <Watch/>
        <Testimonial/>
      </div>
      <Signup/>
    </div>
  );
}

export default App;
