import { EmailInput, GlobalStyle, LoginButton, PasswordInput, SignupHref } from "../styledComponent/style";
import { Link } from "react-router-dom";
import backImg from "../assets/back.png"
import { useState } from "react";
import axios from "axios";
import { SERVER_URL } from "../api/api";


export function SignInpage() {
    const [values, setValues] = useState({
        email: '',
        password: '',
    })
    const [id, setId] = useState(-1);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    }
    async function SignInDB(email, password) {
        var id = -1;
        const res = await axios.post(`${SERVER_URL}/user/signin`, {
            email: email,
            password: password
        }).then(function (response) {
            setId(response.data.userId);
        }).catch((error) => {
            console.log(error);
        })
        return id;
    }
    
    const handleSubmit = async (e) => {
        SignInDB(values.email, values.password);
        console.log(id);
        if (id == -1) {
            alert('존재하지 않는 이메일과 비밀번호입니다.');
        } else {
            window.location.replace(`/`);
        }
        setValues({email:'', password:''});
    }

    return (
        <>
            <GlobalStyle/>
            <p style={{
                position: "absolute",
                width: "123px",
                height: "30px",
                left: "25px",
                top: "120px",
                fontFamily: 'Pretendard',
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "30px",
                lineHeight: "30px",
                color: "#000000"
            }}>로그인</p>
            <EmailInput id="email" name="email" value={values.email} onChange={handleChange} type='email' placeholder="이메일을 입력해주세요."></EmailInput>
            <PasswordInput id="password" name="password" value={values.password} onChange={handleChange} type='password' placeholder="비밀번호를 입력해주세요."></PasswordInput>
            <LoginButton onClick={handleSubmit}>로그인</LoginButton>
            <Link to="/signup"><SignupHref>회원가입</SignupHref></Link>
            
        </>
    );
};