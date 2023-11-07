import React from 'react';
import styles from './Watch.module.css';
import cohort from '../../images/Cohort.png';
import eye from '../../images/Eye.png';

function Watch() {
  return (
    <div className={styles.watchContainer}>
        <div className={styles.cohortImg}><img src={cohort} alt='cohort'/></div>
        <div className={styles.watchContent}>
            <img src={eye} alt='eye'/>
            <h4>Watch what the whales are doing</h4>
            <p>All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.</p>
        </div>
    </div>
  )
}

export default Watch