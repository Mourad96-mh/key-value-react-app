import React from 'react';
import styles from './Button.module.css'


const Button = (props)=> {

    return (
        <div className={styles.button}>
            <button className={styles.btn} type={props.type}>{props.children}</button>
        </div>
    )
};

export default Button;

