
import './App.css';

function App() {
  return (
    <div className="App">
        <div className='signup-container'>
          <form className='signup-box'>
            <h3>Sign up for exclusive access.</h3>
            <input type='email' placeholder='Your email address'/>
            <input type='submit' value='Get started' />
            <p>You’ll receive an email with an invite link to join.</p>
          </form>
        </div>
    </div>
  );
}

export default App;
