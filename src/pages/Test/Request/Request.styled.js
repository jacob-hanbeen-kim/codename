import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    flex-direction: center;
    justify-content: center;

    height: 100%;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;

    flex: ${({ flex }) => flex ? flex : 1};
    border: 1px solid black;
    height: 100%;
`

export const Col = styled.div`
    display: flex;
    flex-direction: column;

    flex: ${({ flex }) => flex ? flex : 1};
    border: 1px solid black;
    height: 100%;
`