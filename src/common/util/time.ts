export function timeToSecond(time:string){
    const [hour = "0", minutes= "0", seconds = "0"] = time.split(":")
    const hourInSeconds = Number(hour)*3600
    const  minutesISeconds = Number(minutes)*60

    return hourInSeconds + minutesISeconds + Number(seconds)
}