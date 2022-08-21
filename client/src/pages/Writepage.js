import { GlobalStyle, SubmitText, WriteButton, SubmitBottomText } from "../styledComponent/style";
import { useState } from "react";
import { WriteForm } from "../components/writeForm";
import { Bottle } from "../components/bottle";
import { Wavy } from "../components/wavy";

export function Writepage() {
    const [isText, setIsText] = useState();
    const [id, setId] = useState(-1);
    const [value, setValue] = useState();
    const [isSubmit, setIsSubmit] = useState(true);
    const [feel, setFeel] = useState("불안");
    const handleChange = (e) => setValue(e.target.value);
    const handleSubmit = (e) => {
        alert('편지를 넘실넘실 흘려보냈습니다.');
        setIsSubmit(false);

        setValue('');
        setTimeout((
            () => {
                window.location.replace(`/h2`);
        }), 5000);
    }
    return (
        <>
            <GlobalStyle/>
            <Wavy/>
            {isSubmit || <SubmitText>익명의 누군가에게<br/>{feel} 해류를 타고 편지가 전송됩니다.<br/></SubmitText>}
            {isSubmit || <SubmitBottomText>당신의 감정은 <b>{feel}</b>입니다.<br/><p style={{fontSize: '15px'}}>익명의 누군가에게 <b>{feel}한 감정</b>을 털어놓아 보세요.</p></SubmitBottomText>}
            {isSubmit && <p style={{
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
            }}>편지 작성</p>}
            <Bottle isLetter={true}/>
            {isSubmit && <WriteForm value={value} onchange={handleChange}/>}
            {isSubmit && <WriteButton value={value} onClick={handleSubmit}>편지 흘려보내기</WriteButton>}
        </>
    )
}