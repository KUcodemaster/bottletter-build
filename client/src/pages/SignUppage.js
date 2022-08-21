import { Link } from "react-router-dom";
import backImg from "../assets/back.png";
import { Wavy } from "../components/wavy";
import { EmailInput2, Emailtag, GlobalStyle, NameInput, Nametag, PasswordInput2, Passwordtag } from "../styledComponent/style";
import { signUpDB } from "../api/api";
import { useState } from "react";
import { SERVER_URL } from "../api/api";

export function SignUppage() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    }
    const handleSubmit = async (e) => {
        signUpDB(values.name, values.email, values.password);
        alert('회원가입을 완료했습니다.');
        window.location.replace(`/signin`);
    }
    return (
        <>
            <GlobalStyle/>
            <Wavy/>
            <p style={{
                position: "absolute",
                width: "123px",
                height: "50px",
                left: "25px",
                top: "120px",
                fontFamily: 'Pretendard',
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "30px",
                lineHeight: "30px",
                color: "#000000"
            }}>회원가입</p>
            <Link to="/index"><img src={backImg} style={{
                position: "absolute",
                width: "24px",
                height: "24px",
                left: "24px",
                top: "53px"
            }}></img>
            </Link>
            <Nametag>이름</Nametag>
            <NameInput id="name" name="name" value={values.name} onChange={handleChange} type="text" placeholder="이름을 입력해주세요"></NameInput>
            <Emailtag>이메일</Emailtag>
            <EmailInput2 id="email" name="email" value={values.email} type="email" onChange={handleChange} placeholder="이메일을 입력해주세요"></EmailInput2>
            <Passwordtag>비밀번호</Passwordtag>
            <PasswordInput2 id="password" name="password" value={values.password} onChange={handleChange} type="password" placeholder="비밀번호를 입력해주세요."></PasswordInput2>
            <button style={{
                position: "absolute",
                width: "375px",
                height: "83px",
                left: "0px",
                top: "729px",
                border: "0px",
                background: "#8FC6DE",
                fontFamily: 'Pretendard',
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "19px",
                color: "#FFFFFF",
            }} onClick={handleSubmit}>회원가입 완료</button>
        </>
    );
};