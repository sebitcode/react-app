import { useState, useRef, useEffect } from "react";
import styles from "./StopWatch.module.css";

function StopWatch(){

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning){
            intervalRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }
        return () => {
            clearInterval(intervalRef.current);
        }
    }, [isRunning])

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }
    function stop(){
        setIsRunning(false);
    }
    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }
    function formatTime(){
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / 1000 % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2, "0")
        minutes = String(minutes).padStart(2, "0")
        seconds = String(seconds).padStart(2, "0")
        milliseconds = String(milliseconds).padStart(2, "0")

        return `${hours}:${minutes}:${seconds}:${milliseconds}`
    }

    return(
        <div className={styles.body}>
            <div className={styles.stopwatch}>
                <div className={styles.display}>{formatTime()}</div>
                <div className={styles.controls}>
                    <button className={styles.startButton} onClick={start}>Start</button>
                    <button className={styles.stopButton} onClick={stop}>Stop</button>
                    <button className={styles.resetButton} onClick={reset}>Reset</button>
                </div>
            </div>
        </div>
    );
}

export default StopWatch;