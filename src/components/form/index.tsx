import React, { useState } from 'react';
import ITask from '../../types/ITaskInterface';
import Button from '../button';
import style from './Form.module.scss'
import {v4 as uuidv4} from "uuid";

interface FormProps {
    setTasks:React.Dispatch<React.SetStateAction<ITask[]>>
}

function Form({setTasks}:FormProps){
    const [task, setTask] = useState('')
    const [timer, setTimer] = useState('00:00')

    function submitTask(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        let newTask:ITask = { 
            time:timer,
            task:task,
            id:uuidv4(),
            selected:false,
            completed:false
        }
        setTasks(oldTasks => [...oldTasks, newTask]) 
        setTask("")
        setTimer("00:00:00")
    }

    return <form className={style.newTask} onSubmit={submitTask}>
            <div className={style.inputContainer}>
                <label htmlFor='task'>
                    Add new Study
                </label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    placeholder='What do you want to study?'
                    value={task}
                    onChange={event => setTask(event.target.value)}
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
                    value={timer}
                    onChange={event => setTimer(event.target.value)}
                    required
                />
            </div>
            
            <Button
                type='submit'
                onClick={()=>{}}
            >
                Add
            </Button>
        </form>
}

export default Form