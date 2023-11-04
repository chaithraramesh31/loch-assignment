import React from 'react';
import styles from './Signup.module.css';

function Signup() {
  return (
    <div className={styles.signupContainer}>
        <form className={styles.signupBox}>
            <h3>Sign up for exclusive access.</h3>
            <input type='email' placeholder='Your email address' required/>
            <input type='submit' value='Get started' />
            <p>You’ll receive an email with an invite link to join.</p>
        </form>
    </div>
  )
}

export default Signup