import styled from "styled-components";
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export const Container = styled.div`
    height: 100%;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    width: 100%;
    height: 100%;
`

export const TestContainer = styled.div`
    width: 100%;
    padding: 10px;
    flex: 1;
    /* height: 50%; */
    /* position: fixed; */
`

export const ResponseContainer = styled.div`
    width: 100%;
    border-top: 1px solid black;
    flex: 1;
    /* height: 50%; */
`

export const TestCaseContainer = styled.div`
    overflow-y: scroll;
`

export const TestCase = styled.div`
    display: flex;
    justify-content: flex-end-start;
    align-items: center;

    width: 100%;
    padding: 15px 10px;

    border: 1px solid #252525;
`

export const TestTitle = styled.div`
    
`

export const StatusContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`

export const PassIcon = styled(FaCheckCircle)`
    color: green;
`

export const FailIcon = styled(FaTimesCircle)`
    color: red;
`

export const ResponseTextArea = styled.textarea`
    resize: none;
    height: 100%;
    width: 100%;
    border: none;

    padding: 20px;
`