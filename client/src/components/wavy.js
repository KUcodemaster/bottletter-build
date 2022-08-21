import React from 'react';
import Wave from 'react-wavify';

export function Wavy() {
    return (
        <Wave style={{height: '768px', width: '375px'}} mask="url(#mask)" fill="#CAE6F2" options={{
            height: 330,
            amplitude: 20,
            speed: 0.18,
            points: 5
            }}>
            <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="0" stopColor="#CAE6F2" />
                <stop offset="0.5" stopColor="white" />
            </linearGradient>
            <mask id="mask">
                <rect x="0" y="0" width="375" height="2000" fill="url(#gradient)"  />
            </mask>
            </defs>
        </Wave>
    )
}
