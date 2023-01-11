import styled from "styled-components";

const darkGrey = '#525252';
const grey = '#999999';
const lightGrey = '#EFEFEF'

export const Container = styled.div`
    width: 100%;
    margin-top: 10px;
`

export const BtnWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 5px 20px;

    display: flex;
    justify-content: flex-end;
`

export const TextAreaWrapper = styled.div`
    width: 100%; 
    height: 240px;
    padding: 12px 20px;

    box-sizing: border-box;
    border: 1px solid darkGrey; 
`

export const TextArea = styled.textarea`
    width: 100%;
    height: 100%;

    font-size: 16px;

    border: none;
    resize: none;

    &:focus {
        outline: none;
    }
`

export const BeautifyBtn = styled.button`
    background-color: transparent;
    border: none;

    color: #153985;
    padding: 0;

    cursor: pointer;
`