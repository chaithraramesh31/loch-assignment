import React from 'react';
import styles from './Watch.module.css';
import cohort from '../../images/Cohorts.svg';
import eye from '../../images/Eye.png';

function Watch() {
  return (
    <div className={styles.watchContainer}>
        <img src={cohort} alt='cohort'/>
        <div className={styles.watchContent}>
            <img src={eye} alt='eye'/>
            <h4>Watch what the whales are doing</h4>
            <p>All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.</p>
        </div>
    </div>
  )
}

export default Watch