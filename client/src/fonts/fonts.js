import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @font-face {
        font-family: 'GangwonEduAll';
        font-weight: 400;
        font-style: normal;
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/gangwon/GangwonEduAllLight.eot');
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/gangwon/GangwonEduAllLight.eot?#iefix') format('embedded-opentype'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/gangwon/GangwonEduAllLight.woff2') format('woff2'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/gangwon/GangwonEduAllLight.woff') format('woff'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/gangwon/GangwonEduAllLight.ttf') format("truetype");
        font-display: swap;
    } 
    @font-face {
        font-family: 'GangwonEduAll';
        font-weight: 400;
        font-style: normal;
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/gangwon/GangwonEduAllBold.eot');
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/gangwon/GangwonEduAllBold.eot?#iefix') format('embedded-opentype'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/gangwon/GangwonEduAllBold.woff2') format('woff2'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/gangwon/GangwonEduAllBold.woff') format('woff'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/gangwon/GangwonEduAllBold.ttf') format("truetype");
        font-display: swap;
    } 
    @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css");
`;