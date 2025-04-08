import React from "react"

function Gallery(){
    const images = [
        "/도겸.gif",
        "/도겸2.gif",
        "/도겸3.gif"
    ]
    
    return(
        <div>
            <h2>우리의 추억</h2>
            <div style={{display:'flex', gap:'10px', flexWrap:'wrap'}}>
                {images.map((src, index)=>(
                    <img
                        // key 가 진짜 중요해!!!!!(개발자가 하는게 아니라!)
                        // 리액트가 변경사항을 알아차리기 쉽게하기 위해서
                        key={index}
                        src={src}
                        alt={`기념사진${index+1}`}
                        width="150"
                    />
                ))}
            </div>
        </div>
    )
}

export default Gallery