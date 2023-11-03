
import './App.css';
import Notification from './components/NotificationComponent/Notification';
import Signup from './components/SignupComponent/Signup';

function App() {
  return (
    <div className="App">
      <div className='left-container'>
        <Notification/>
      </div>
      <Signup/>
    </div>
  );
}

export default App;
