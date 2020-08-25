import styled from 'styled-components';

export const Container = styled.header`
    height: 50px;
    width: 100%;
    background-color: ${({ isOnline }) => isOnline ? 'lightgreen' : 'lightcoral'};

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
    box-sizing: border-box;

    h2 {
        font-size: 20px;
        font-family: sans-serif;
        font-weight: bold;
        color: #000;
    }
`;
