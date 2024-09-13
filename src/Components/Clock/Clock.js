import { useState, useEffect } from "react";
import style from "./clock.module.css"

export default function Clock() {

    const [time, setTime] = useState(new Date());

    const getTimeFormat = () => {
        const hours = String(time.getHours()).padStart(2, '0');
        const minutes = String(time.getMinutes()).padStart(2, '0');
        const seconds = String(time.getSeconds()).padStart(2, '0');

        return `${hours}:${minutes}:${seconds}`
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        },1000);

        return () => clearInterval(intervalId);
    },[])

    return (
        <div className={style.clock}>
            <h2 className={style.h2}>Clock</h2>
            <h2 className={style.time}>{getTimeFormat()}</h2>
        </div>
    )
}