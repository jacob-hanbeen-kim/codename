import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
`

export const TabContainer = styled.div`
    /* height: 10%; */
    padding-top: 10px;
    padding-left: 5px;
`

export const Tab = styled.button`
    height: 30px;
    min-width: 200px;

    border: 1px solid #252525;

    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    flex-direction: center;
    justify-content: flex-start;
    border-top: 1px solid black;

    height: 95%;
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