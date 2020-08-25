import styled from 'styled-components';

export const Todo = styled.div`
    display: flex;
    align-items: center;
    font-family: sans-serif;
    padding: 10px;
    background-color: ${({ isColor }) => isColor ? 'lightgray' : 'white'};

    p {
        font-size: 20px;
        padding-right: 10px;
    }

    button {
        font-size: 20px;
        margin-right: 10px;
        width: 150px;
        height: 30px;

        &:hover {
            background-color: lightgreen;
        }

        &:active {
            background-color: green;
        }
    }
`;
