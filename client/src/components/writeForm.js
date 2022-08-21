import { useState } from 'react';
import './style.css';

export function WriteForm({value, onchange}) {
    return (
        <textarea className='form' value={value} onChange={onchange} placeholder="나만의 감정을 흘려보내세요. 최대 250자까지 쓸 수 있답니다."></textarea>
    )
}