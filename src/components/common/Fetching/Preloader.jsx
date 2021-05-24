import React from 'react';
import preloader from '../../../assets/preloader.svg'
import styles from './Preloader.module.css'

const Preloader = (props) => {
    return (
        
        //<div style={{ backgroundColor: 'transparent' }}><img src={preloader} /></div>
        <div className={styles.container}>
            <div className={styles.spinner}>
                <span className={styles.spinnertext}>Loading...</span>
                <div className={styles.rect}></div>
            </div>
        </div>
        
    )
}
export default Preloader;