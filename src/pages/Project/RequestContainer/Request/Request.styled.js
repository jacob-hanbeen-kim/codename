import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    flex-direction: center;
    justify-content: flex-start;

    height: 100%;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: ${({ align }) => align ? align : 'center'};

    flex: ${({ flex }) => flex ? flex : 1};
`

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */

    width: 100%;

    flex: ${({ flex }) => flex ? flex : 1};
    /* border: 1px solid black; */
`

export const Url = styled.input`
    padding: 10px;
`

export const HorizontalLine = styled.hr`
    color: black;
    background-color: black;
    height: 5;
    width: 100%;
`