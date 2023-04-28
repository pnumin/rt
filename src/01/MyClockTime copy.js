import { useState, useEffect } from "react";
const MyClockTime = () => {
    const [cTime, setcTime] = useState(new Date().toLocaleTimeString()) ;

    useEffect(()=>{
        const timerId = setInterval(()=>{
            setcTime(new Date().toLocaleTimeString())
        }, 1000);

        return () => clearInterval(timerId) ;
    }, []);
    return (
        <>
            <h1>현재시각 : {cTime}</h1>
        </>
    );
}

export default MyClockTime ;