import styled from 'styled-components';


const HeaderSt = styled.header`
    overflow: hidden;
    background-color: #004c58;
    padding: 20px 10px;
    margin-bottom: 30px;

`;

const H1St = styled.h1`

    color: grayscale($color: rgb(235, 235, 235));

`;

const NavSt = styled.nav`
      display: flex;
      justify-content: right;

`;

const SpanSt = styled.span`
        color: ${props=> props.span1 && "rgb(235, 235, 235)" || "#FC0A93"};
        text-decoration: none;
        margin-right: 70px;
        position: relative;
        display: block;
        padding: 5px;
        cursor: pointer;
`;

export {
    HeaderSt,
    H1St,
    NavSt,
    SpanSt,


}
