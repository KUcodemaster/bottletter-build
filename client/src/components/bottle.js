import bottleImg from '../assets/bottle.png';
import bottleImg2 from '../assets/bottle2.png';
import './style.css';


export function Bottle({isLetter}) {
    return (
        <img className='bottle' src={!isLetter ? bottleImg: bottleImg2} alt="bottle" />
    )
}
