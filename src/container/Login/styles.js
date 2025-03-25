import styled from 'styled-components';

import Download from '../../assets/Download.jpeg';
import Background from '../../assets/background.png';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`;

export const LeftContainer = styled.div`
    background: url('${Download}');
    background-size: cover;
    background-position: center;

    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 65%;
    }
`;

export const RightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100%;
    width: 100%;
    max-width: 50%;

    background: url('${Background.png}');
    background-color: #1e1e1e;

    p {
        color: #fff;
        font-size: 25px;
        font-weight: 900;

        a {
            text-decoration: underline;
        }
    }
`;

export const Title = styled.h2`
    font-family: 'Road Rage', sans-serif;
    font-size: 50px;
    color:rgb(79, 173, 205);

    span {
        color:rgb(5, 155, 22);
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 100%;

    input {
        width: 100%;
        border: none;
        height: 50px;
        border-radius: 10px;
        padding: 0 16px;
    }

    label {
        font-size: 20px;
        font-weight: 900;
        color:rgb(204, 195, 12);
    }

    p {
        font-size: 13px;
        line-height: 80%;
        font-weight: 600;
        color: #cf3057;
        height: 10px;

    }
`;



