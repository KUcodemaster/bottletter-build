import React, { useState, useEffect } from "react";

export function Timer({ mm, ss, hh, onFinish }) {
    const [minutes, setMinutes] = useState(parseInt(mm));
    const [seconds, setSeconds] = useState(parseInt(ss));
    const [hours, setHours] = useState(parseInt(hh));

    useEffect(() => {
        const countdown = setInterval(() => {
            if (parseInt(seconds) > 0) {
                setSeconds(parseInt(seconds) - 1);
            }
            if (parseInt(seconds) === 0) {
                if (parseInt(minutes) === 0) {
                    if (parseInt(hours) === 0) {
                        clearInterval(countdown);
                        onFinish(true);
                    } else {
                        setHours(parseInt(hours) - 1);
                        setMinutes(59);
                        setSeconds(59);
                    }
                }
                else {
                    setMinutes(parseInt(minutes) - 1);
                    setSeconds(59);
                }
            } 
        }, 1000);
        return () => clearInterval(countdown);
        }, [hours, minutes, seconds]);
        
    return (
        <div style={{display:"none"}}>
            {hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
    );
};
