import Style from './Clock.module.scss'

interface ClockProps{
    time:number | undefined
}

export default function Clock({time = 0}:ClockProps){
    const minute = Math.floor(time/60)
    const second = time%60

    const [minuteTen, minuteUnit] = String(minute).padStart(2,"0")
    const [secondTen, secondUnit] = String(second).padStart(2,"0") 

    return <>
        <span className={Style.clockNumber}>{minuteTen}</span>
        <span className={Style.clockNumber}>{minuteUnit}</span>
        <span className={Style.clockDivider}>:</span>
        <span className={Style.clockNumber}>{secondTen}</span>
        <span className={Style.clockNumber}>{secondUnit}</span>
    </>
}