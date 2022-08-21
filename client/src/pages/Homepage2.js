import { GlobalStyle, LowText, MiddleText, StyledButton, LetterText, ModalText, ModalUpperButton, ModalLowerButton } from '../styledComponent/style';
import { Wavy } from '../components/wavy';
import { Logo } from '../components/logo';
import { Timer } from '../components/timer';
import Modal from 'react-modal';
import { Bottle } from '../components/bottle';
import { useEffect, useState } from 'react';
import '../components/style.css';
import { Link } from 'react-router-dom';

export function Homepage2() {
    const [nextLetter, setNextLetter] = useState(new Date('11:31:55'));
    const [isLetter, setIsletter] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    
    return (
        <div>
            <GlobalStyle/>
            <Logo/>
            {isLetter || <MiddleText>편지가 오고 있습니다</MiddleText>}
            {isLetter && <>
            <LetterText>편지를 작성해야</LetterText>
                        <LetterText style={{top:'165px'}}>도착한 편지를 볼 수 있어요</LetterText></>}
            {isLetter || <LowText>
                <Timer style={{display:"hidden"}} hh={'00'} mm={'00'} ss={'13'} onFinish={() =>
                    { window.location.replace(`/view`);
                }}/>
            </LowText>}
            <Bottle isLetter={isLetter}/>
            <Link to='/write'><StyledButton>편지 쓰기</StyledButton></Link>
            <Modal style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
                content: {
                    position: "absolute",
                    width: "290px",
                    height: "264px",
                    left: "44px",
                    top: "274px",
                    background: "#FFFFFF",
                    borderRadius: "10px",
                }
            }} isOpen={isModalOpen} onRequestClose={() => setModalOpen(false)} className='modal'>
                <ModalText><span style={{fontSize: '30px'}}>🌊</span><br/> 편지를 보내야<br/> 받은 편지를 열람할 수 있어요</ModalText>
                <Link to="/write"><ModalUpperButton>편지 쓰고 흘려보내기</ModalUpperButton></Link>
                <ModalLowerButton onClick={()=> setModalOpen(false)}>다음에 할래요</ModalLowerButton>
            </Modal>
            <Wavy/>
        </div>
    );
};
