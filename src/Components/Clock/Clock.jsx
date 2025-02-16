import { useState, useEffect } from "react";
import "./Clock.css"

function Clock(){

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    function formatTIme(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM"

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
    }

    function padZero(number){
        return number > 9 ? number : `0${number}`
    }

    return  <div className="body">
                <div className="clock-container">
                    <div className="clock">
                        <span>{formatTIme()}</span>
                    </div>
                </div>
            </div>
}

export default Clock