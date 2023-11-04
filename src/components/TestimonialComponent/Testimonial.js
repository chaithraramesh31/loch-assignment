import React from 'react';
import styles from './Testimonial.module.css';
import vector from '../../images/Vector.png';

function Testimonial() {
  return (
    <div>
        <div className={styles.heading}>
            <h5>Testimonials</h5>
            <div className={styles.line}></div>
        </div>
        <div className={styles.testimonialContainer}>
            <img src={vector} alt='vector'/>
            <div className={styles.testimonialList}>
                <div className={styles.testimonial}>
                    <p className={styles.testimonialName}>Jack F &nbsp;<span>Ex Blackrock PM</span></p>
                    <p className={styles.testimonialDescription}>“Love how Loch integrates portfolio analytics and whale watching into one unified app.”</p>
                </div>
                <div className={styles.testimonial}>
                    <p className={styles.testimonialName}>Yash P &nbsp;<span>Research, 3poch Crypto Hedge Fund</span></p>
                    <p className={styles.testimonialDescription}>“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”</p>
                </div>
                <div className={styles.testimonial}>
                    <p className={styles.testimonialName}>Shiv S &nbsp;<span>Co-Founder Magik Labs</span></p>
                    <p className={styles.testimonialDescription}>“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial