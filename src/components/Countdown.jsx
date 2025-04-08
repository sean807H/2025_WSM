import React from "react";
import { useState, useEffect } from "react";

// 상태정의 순서 - 처음화면 > 상호작용 > 상태화면
function Countdown(){
    const [dayLeft, setDayLeft] = useState(0)

    // useEffect!!!!
    useEffect(() =>{
        const today = new Date()
        const targetDate = new Date('2026-04-12')
        const diff = targetDate - today 

        const remaining = Math.ceil(diff/(1000*60*60*24))
        setDayLeft(remaining)
        // 의존성 배열(배열이 바뀔때마다 실행), 타임어 설정 등 = 부수효과
    },[])

    return(
        <div>
            <h1>결혼식까지 남은 날짜</h1>
            <p>{dayLeft}일 남았습니다.</p>
        </div>
    )



}

export default Countdown