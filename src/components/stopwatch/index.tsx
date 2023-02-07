import { useEffect, useState } from "react";
import { timeToSecond } from "../../common/util/time";
import ITask from "../../types/ITaskInterface";
import Button from "../button";
import Clock from "./clock";
import Style from './Stopwatch.module.scss'

interface StopwatchProps{
    taskSelected:ITask|undefined
    concludeTask:()=>void
}

export default function Stopwatch({taskSelected,concludeTask}:StopwatchProps){
    const [time, setTime] = useState<number>()

    useEffect(()=>{
        if(taskSelected?.time){
            let timeInSeconds = timeToSecond(taskSelected.time)
            setTime(timeInSeconds)
        }
    },[taskSelected])

    function counter(currentTime:number = 0){
        setTimeout(()=>{
            if(currentTime>0){
                setTime(currentTime-1)
                counter(currentTime-1)
            }else{
                concludeTask()
            }
        },1000)
    }

    return <>
        <div className={Style.stopwatch}>
            <p className={Style.title}>Choose a card and start the stopwatch</p>
            <div className={Style.clockWrapper}>
                <Clock
                    time={time}
                />
            </div>
            <Button
                onClick={()=>counter(time)}
            >
                Start
            </Button>
        </div>
    </>
}