import React from 'react';
import style from './Button.module.scss'

interface ButtonProps {
    type?:"button" | "submit" | "reset" | undefined,
    onClick:()=>void
    children?:React.ReactNode
}

function Button({type,onClick,children}:ButtonProps){
    return <>
        <button onClick={onClick} type={type} className={style.submitButton}>
            {children}
        </button>
    </>
}

export default Button