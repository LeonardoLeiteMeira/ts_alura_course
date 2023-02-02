import React from 'react';
import style from './Button.module.scss'

type ButtonProps = {
    text:string
}

function Button({text}:ButtonProps){
    return <>
        <button className={style.submitButton}>{text}</button>
    </>
}

export default Button