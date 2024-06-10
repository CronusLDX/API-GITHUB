import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    margin-top: 2rem;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        margin-top: 1rem;
    }

    @media (max-width: 568px) {
        margin-top: 0.5rem;
    }
`;

export const Title = styled.h1`
    font-size: ${(props) => props.theme.fontSize.xlgg};

    @media (max-width: 768px) {
        font-size: ${(props) => props.theme.fontSize.lg};
    }

    @media (max-width: 568px) {
        font-size: ${(props) => props.theme.fontSize.md};
    }
`;

export const Logo = styled.img`
    width: 7rem;
    margin-top: 20px;

    @media (max-width: 768px) {
        width: 6rem;
        margin-top: 15px;
    }

    @media (max-width: 568px) {
        width: 5rem;
        margin-top: 10px;
    }
`;

export const Form = styled.div`
    justify-content: center;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 583px;

    @media (max-width: 768px) {
        flex-direction: column;
        max-width: 90%;
    }

    @media (max-width: 568px) {
        max-width: 100%;
    }
`;

export const Input = styled.input`
    outline: none;
    border: none;
    width: 22rem;
    margin-top: 30px;
    margin-left: 60px;
    height: 2.5rem;
    background-color: ${(props) => props.theme.colors.gray700};
    padding-left: 1rem;
    border-radius: 10px;
    color: ${(props) => props.theme.colors.white};
    justify-content: center;
    display: flex;
    align-items: center;

    &::placeholder {
        color: ${(props) => props.theme.colors.gray600};
    }

    @media (max-width: 768px) {
        width: 18rem;
        margin-top: 20px;
        margin-left: 0;
    }

    @media (max-width: 568px) {
        width: 16rem;
        margin-top: 15px;
    }
`;

export const Button = styled(Link)`
    width: 80px;
    height: 64px;
    justify-content: center;
    display: flex;
    align-items: center;
    background: transparent;
    padding-top: 25px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};

    @media (max-width: 768px) {
        width: 70px;
        height: 54px;
        padding-top: 20px;
    }

    @media (max-width: 568px) {
        width: 60px;
        height: 44px;
        padding-top: 15px;
    }
`;
