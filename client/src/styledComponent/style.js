import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const StyledButton = styled.button`
    box-sizing: border-box;

    position: absolute;
    width: 236px;
    height: 74px;
    left: 69px;
    top: 630px;

    background: rgba(255, 255, 255, 0.2);
    border: 1px solid #FFFFFF;
    border-radius: 37px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 28px;

    color: #FFFFFF;

    &:hover {  
        background: rgba(255, 255, 255, 0.2);
        border: 1px solid #4B9CAE;
        color : #4B9CAE;
    }
`;

export const GlobalStyle = createGlobalStyle`
    body {
        background: linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #CAE6F2 69.27%);
        width: 375px;
        height: 768px;
        margin: 0;
    }
    
    html {
        width: 375px;
        height: 768px;
    }
    
    p {
        margin: 0;
    }
`;

export const MiddleText = styled.p`
    font-family: 'GangwonEduAll';
    position: absolute;
    width: 153px;
    height: 52px;
    left: 115px;
    top: 145px;
    font-style: normal;
    font-weight: 400;
    
    line-height: 26px;
    text-align: center;
    color: #A9A9A9;
    margin: 0;
    font-size: 18px;
`;

export const LowText = styled.p`
    font-family: 'GangwonEduAll';
    position: absolute;
    width: 123px;
    height: 52px;
    left: 128px;
    top: 165px;
    font-style: normal;
    font-weight: 400;
    
    line-height: 26px;
    text-align: center;
    color: #A9A9A9;
    margin: 0;
    font-size: 20px;
`
export const LetterText = styled.p`
    position: absolute;
    width: 174px;
    height: 52px;
    left: 102px;
    top: 135px;

    font-family: 'GangwonEduAll';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;

    text-align: center;

    color: #A9A9A9;
`
export const ModalText = styled.p`
    position: absolute;
    width: 205px;
    height: 79px;
    left: 24px;
    top: 25px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 28px;
    /* or 93% */


    color: #000000;
`;

export const ModalUpperButton = styled.button`
    position: absolute;
    width: 261px;
    height: 54px;
    left: 14px;
    top: 135px;
    background-color: #4B9CAE;
    color: #FFFFFF;
    border-radius: 5px;
    border: 0;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    /* identical to box height, or 167% */
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    text-align: center;
`

export const ModalLowerButton = styled.button`
position: absolute;
width: 261px;
height: 54px;
left: 14px;
top: 196px;
background-color: #D9D9D9;
border-radius: 5px;
border: 0;
font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 25px;
/* identical to box height, or 167% */
text-align: center;
color: #000000;
`

export const WriteButton = styled.button`
position: absolute;
width: 343px;
height: 65px;
left: 16px;
top: 600px;

/* new_gray_inactive */
font-family: 'Pretendard';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
/* identical to box height */


color: #FFFFFF;
background: ${(props) => props.value ? "#4B9CAE" : "#CBD3D5"};
border: 0;
border-radius: 0px 0px 10px 10px;
`

export const SubmitText = styled.p`
position: absolute;
width: 250px;
height: 52px;
left: 63px;
top: 149px;

font-family: 'GangwonEduAll';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 26px;
/* or 144% */

text-align: center;
color: #A9A9A9;
`;

export const SubmitBottomText = styled.p`
position: absolute;
width: 311px;
height: 63px;
left: 16px;
top: 587px;
padding: 16px;

background: #246272;
border-radius: 10px;
font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 29px;
/* or 161% */


color: #FFFFFF;
`

export const CommentInput = styled.input`
    position: absolute;
    width: 280px;
    height: 40px;
    left: 40px;
    top: 536px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 20px;

    /* gray3 */

    color: #9A9A9A;
`;

export const CommentLabel = styled.p`
    position: absolute;
    width: 89px;
    height: 20px;
    left: 40px;
    top: 511px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;

    /* gray3 */

    color: #9A9A9A;
`

export const DownLetter = styled.p`
    position: absolute;
    width: 89px;
    height: 17px;
    left: 143px;
    top: 677px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    text-decoration-line: underline;

    /* new_gray3 */

    color: #A2A2A2;
    cursor:pointer;
`;

export const EmailInput = styled.input`
position: absolute;
width: 325px;
height: 60px;
left: 16px;
top: 271px;
font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 18px;
/* identical to box height */
border: 1px solid #E0E0E0;
padding-left: 16px;
border-radius: 8px;
color: black;

`


export const PasswordInput = styled.input`
position: absolute;
width: 325px;
height: 60px;
left: 16px;
top: 346px;
font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 18px;
/* identical to box height */
border: 1px solid #E0E0E0;
padding-left: 16px;
border-radius: 8px;

color: black;

`

export const LoginButton = styled.button`
position: absolute;
width: 343px;
height: 60px;
left: 16px;
top: 433px;
border-radius: 8px;
background-color:#8FC6DE;
color:#FFFFFF;

font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
/* identical to box height */
border: 0;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const SignupHref = styled.p`
position: absolute;
width: 69px;
height: 17px;
left: 295px;
top: 510px;

font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 17px;
/* identical to box height */


color: #A7A7A7;
`

export const Nametag = styled.p`
position: absolute;
width: 28px;
height: 19px;
left: 22px;
top: 184px;

font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;

color: #000000;
`

export const NameInput = styled.input`
position: absolute;
width: 325px;
height: 60px;
left: 16px;
top: 211px;
border-radius: 8px;
font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 18px;
/* identical to box height */
padding-left:16px;
border: 1px solid #E0E0E0;
`

export const Emailtag = styled.p`
position: absolute;
width: 42px;
height: 19px;
left: 22px;
top: 301px;

font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;

color: #000000;
`


export const EmailInput2 = styled.input`
position: absolute;
width: 325px;
height: 60px;
left: 16px;
top: 328px;
border-radius: 8px;
font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 18px;
/* identical to box height */
padding-left:16px;
border: 1px solid #E0E0E0;
`

export const Passwordtag = styled.p`
position: absolute;
width: 56px;
height: 19px;
left: 22px;
top: 418px;

font-family: 'Pretendard';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;

color: #000000;
`


export const PasswordInput2 = styled.input`
position: absolute;
width: 325px;
height: 60px;
left: 16px;
top: 445px;
border-radius: 8px;
font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 18px;
/* identical to box height */
padding-left:16px;
border: 1px solid #E0E0E0;
`

export const SignupButton = styled.button`
position: absolute;
border:0;
width: 343px;
height: 60px;
left: 16px;
top: 520px;
font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
border-radius:8px;
font-size: 18px;
line-height: 22px;
/* identical to box height */
color: #FFFFFF;
background: #4B9CAE;
border-radius: 8px;
`


export const SignupNoButton = styled.button`
box-sizing: border-box;

position: absolute;
width: 343px;
height: 60px;
left: 16px;
top: 588px;

background: #FFFFFF;
border: 1px solid #4B9CAE;
border-radius: 8px;

font-family: 'Pretendard';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
/* identical to box height */


color: #4B9CAE;


`