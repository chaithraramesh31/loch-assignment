import React from 'react';
import styles from './Notification.module.css';
import bell from '../../images/Bell.png';
import innerbell from '../../images/Innerbell.png';
import barchart from '../../images/Barchart.png';
import clock from '../../images/Clock.png';
import checkmark from '../../images/Checkmark.png';
import dropdown from '../../images/triangle-down.png';

function Notification() {
  return (
    <div className={styles.notificationContainer}>
        <div className={styles.notificationContent}>
            <img src={bell} alt='bell'/>
            <h4>Get notified when a highly correlated whale makes a move</h4>
            <p>Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.</p>
        </div>
        <div className={styles.notificationListContainer}>
            <div className={styles.shadowEffect}>
                <div className={styles.notificationList}>
                    <div className={`${styles.notification} ${styles.bellNotification}`}>
                        <div className={styles.notificationIcons}>
                            <img src={innerbell} alt='innerbell'/>
                            <p>Save</p>
                        </div>
                        <p>We’ll be sending notifications to you here</p>
                        <input type='email' placeholder='hello@gmail.com'/>
                    </div>
                    <div className={styles.notification}>
                        <div className={styles.notificationIcons}>
                            <img src={barchart} alt='barchart'/>
                            <img src={checkmark} alt='checkmark' style={{width: "14px", height: "14px"}}/>
                        </div>
                        <div className={styles.notifyText}>
                            <p>Notify me when any wallets move more than</p>
                            <div className={styles.amount}>
                                <p>$1,000.00</p>
                                <img src={dropdown} alt='dropdown'/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.notification}>
                        <div className={styles.notificationIcons}>
                            <img src={clock} alt='clock'/>
                            <img src={checkmark} alt='checkmark' style={{width: "14px", height: "14px"}}/>
                        </div>
                        <div className={styles.notifyText}>
                            <p>Notify me when any wallet dormant for</p>
                            <div className={styles.amount}>
                                <p> &gt; 30 days</p>
                                <img src={dropdown} alt='dropdown'/>
                            </div>
                            <p>becomes active</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Notification