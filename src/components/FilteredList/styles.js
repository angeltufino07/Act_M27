import styled from 'styled-components';

const TableDesign = styled.table`
    margin: 0 auto;
    background: #012B39;
    border-radius: 0.25em;
    border-collapse: collapse;
    margin-top: 30px;

`;

const Th_Header = styled.th`
    border-bottom: 1px solid #364043;
    color: #E2B842;
    font-size: 0.85em;
    font-weight: 600;
    padding: 0.5em 1em;
    text-align: left;

`;

const TdCell = styled.td`
    color: #fff;
    font-weight: 400;
    padding: 0.65em 1em;

`;

const TrCell = styled.tr `
    transition: background 0.25s ease;
    &:hover{
        background: #014055;
    }
`;

export {
    TableDesign,
    Th_Header,
    TdCell,
    TrCell,




}

