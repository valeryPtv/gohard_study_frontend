// Core
import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    box-sizing: border-box;

    h2 {
        padding-left: 15px;
        font-family: sans-serif;
        font-size: 24px;
        color: #fff;
    }
    background-color: lightblue;
`;

export const Footer = styled.footer`
    height: 50px;
    padding: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    background-color: lightblue;
`;
