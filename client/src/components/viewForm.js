import './style.css';
import { useState } from 'react';

export function ViewForm() {
    const [value, setValue] = useState(['으아아 너무 불안해 난 고려대학교 해커톤에 참가했는데 밤새 한 숨도 못잤어... 좋은 결과가 있겠지? 나를 위해 응원해줘!',
        '덜덜덜덜덜덜덜덜덜덜덜덜덜덜덜덜덜 너무 떨려',
        '으으.. 힘들다. 피곤해ㅠㅠ 시간 얼마 없는데 완성 가능?',
        ' 메타 회사 사장은 생긴 것이 외계인같아.. 생긴 것만 외계인 같은게 하니라 하는 짓도 외계인같은데 너무 이상해….불쾌해.. 앱은 괜찮지만 다른 사람이 홍보했으면 좋겠어',
        '버스 10분 남았는데 탈 수 있을까? 큰일이야..',
        '넘 졸린데 벌써 아침이네ㅜ 여긴 어디.. 나는 누구..?',
        '요즘들어 두통이 너무 심하다.. 자고 싶은데 머리아파서 더 잠이 안온다 아침돼서야 자는 것도 벌써 한달이 넘었다..',]);
    
    return (
        <span className='form view'>{value[Math.floor(Math.random()*value.length)]}
            <div className='line'></div>
        </span>    
    )
}