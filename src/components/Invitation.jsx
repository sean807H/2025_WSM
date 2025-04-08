function Invitation(){
    const handleClick=()=>{
        alert("축하해주셔서 감사합니다.")

    }

    return(
        <div>
            <h2>초대합니다</h2>
            <p>
                평생을 함께하고 싶은 사람이 생겼습니다.<br/>
                처음처럼 변치않는 마음으로 서로 아끼며<br/>
                예쁘게 살겠습니다.<br/>
                부디 함께 하시어<br/>
                저희의 하나됨을 따뜻한 미소로<br/>
                축복해주시길 바랍니다.
            </p>
            <div>
                <p>신랑 <strong>이석민</strong></p>
                <p>신부 <strong>김서연</strong></p>
            </div>

            <button onClick={handleClick}>축하하기</button>
        </div>
    )
}

export default Invitation