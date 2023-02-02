import React from 'react';
import Button from '../button';
import style from './Form.module.scss'

function Form(){
    return <form className={style.newTask}>
            <div className={style.inputContainer}>
                <label htmlFor='task'>
                    Add new Study
                </label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    placeholder='What do you want to study?'
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor='time'>
                    Time
                </label>
                <input
                    type="time"
                    step="1"
                    name="time"
                    id="time"
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            
            <Button
                text='Adicionar'
            />
        </form>
}

export default Form