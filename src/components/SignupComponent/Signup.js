import React, { useState } from 'react';
import styles from './Signup.module.css';

function Signup() {

  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const emailValidation = () => {
    const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(email === '') {
      setErrorMessage('Please fill out this field');
    } else if(regEx.test(email)) {
      const url = 'https://app.loch.one/welcome';
      window.open(url, '_blank');
    } else if(!regEx.test(email) ) {
      setErrorMessage('Please enter a valid email');
    }
  }

  const handleChange = (e) => {
    setEmail(e.target.value);
  }
  return (
    <div className={styles.signupContainer}>
        <div className={styles.signupBox}>
            <h3>Sign up for exclusive access.</h3>
            <input type='email' placeholder='Your email address' required onChange={handleChange}/>
            <p id='errorMessage' className={styles.errorMessage}>{errorMessage}</p>
            <input type='submit' value='Get started' onClick={emailValidation}/>
            <p>You’ll receive an email with an invite link to join.</p>
        </div>
    </div>
  )
}

export default Signup