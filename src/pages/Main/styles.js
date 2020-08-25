import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    height: 30px;

    input {
        font-size: 20px;
        font-family: sans-serif;
        height: 30px;
        width: 100%;
        box-sizing: border-box;
        margin-right: 10px;
    }
`;

export const Todo = styled.div`
    display: grid;
    box-sizing: border-box;
    grid-template-columns: 33% 33% 33%;
    align-items: center;
    font-family: sans-serif;
    padding: 10px;
    background-color: ${({ isColor }) => isColor ? 'lightgray' : 'white'};

    p {
        font-size: 20px;
        padding-right: 10px;
    }
`;
