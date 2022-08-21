import bottletter from "../assets/bottletter.png";
import { GlobalStyle, SignupButton, SignupNoButton } from "../styledComponent/style";
import background from "../assets/bg.png"; 
import bottle from "../assets/bottle2.png"
import { Link } from "react-router-dom";

export function Indexpage() {
    return (
        <>
            <GlobalStyle/>
            <p style={{
                position: "absolute",
                width: "158px",
                height: "30px",
                left: "34px",
                top: "118px",
                color: "#000000",
                fontFamily: 'Rokkitt',
                fontStyle: "normal",
                fontWeight: "800",
                fontSize: "40px",
                lineHeight: "45px",
            }}>bo<span style={{color:"#2A8989"}}>tt</span>letter</p>
            <p style={{
                position: "absolute",
                width: "267px",
                height: "21px",
                left: "35px",
                top: "169px",
                fontFamily: 'GangwonEduAll',
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "21px",
                color: "#A2A2A2",
            }}>
                글을 쓰고 공유하며 감정에 공감을 더해요
            </p>
            <img src={background} style={{
                boxSizing: "border-box",
                position: "absolute",
                width: "375px",
                top: "50%",
                height: "50%",
                background: "linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #CAE6F2 69.27%)",
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            }}></img>
            <Link to="/signup"><SignupButton>회원가입하기</SignupButton></Link>
            <Link to="/signin"><SignupNoButton>이미 계정이 있어요</SignupNoButton></Link>
            <img style={{position:"absolute", left:"130px", top:"290px"}} src={bottle}></img>
        </>
    )
}