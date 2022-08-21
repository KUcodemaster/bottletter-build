import { CommentInput, DownLetter, GlobalStyle, CommentLabel } from '../styledComponent/style';
import { Wavy } from '../components/wavy';
import { ViewForm } from '../components/viewForm';
import { WriteButton } from '../styledComponent/style';
import '../components/style.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export function Viewpage() {
    let [comment, setComment]= useState('');
    let date = new Date();
    return (
        <div>
            <GlobalStyle/>
            <p style={{
                position: "absolute",
                width: "123px",
                height: "30px",
                left: "16px",
                top: "70px",
                fontFamily: 'Pretendard',
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "25px",
                lineHeight: "30px",
                color: "#000000"
            }}>편지 열람</p>
            <ViewForm/>
            <Link to="/"><WriteButton value={true} onClick={() => {
                alert("편지를 다시 흘려보냈습니다.");
            }}>편지 흘려보내기</WriteButton></Link>
            <CommentLabel>한 줄 적기</CommentLabel>
            {comment? <p style={{
                position: "absolute",
                width: "280px",
                height: "40px",
                left: "40px",
                top: "536px",
                fontFamily: 'Pretendard',
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "11px",
                lineHeight: "20px",
                color: "#9A9A9A"
            
            }}>2022.{date.getMonth()}.{date.getDate()} {comment}</p> : <CommentInput onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    setComment(e.target.value);
                    e.target.value='';
                    e.stopPropagation();
                    alert('댓글을 작성했습니다!');
                }
            }} placeholder='댓글을 달아보세요. 댓글은 다른 편지 수신자가 확인할 수 있어요.'/>}
            <Link to="/"><DownLetter onClick={()=>{alert('편지를 가라앉혔습니다. 앞으로는 다른 사람들이 이 편지를 볼 수 없습니다.')}}>편지 가라앉히기</DownLetter></Link>
            <Wavy/>
        </div>
    );
};
