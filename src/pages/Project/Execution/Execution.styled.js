import styled from "styled-components";
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    padding: 10px;
    height: 100%;
`

export const Wrapper = styled.div`
    width: 100%;
`

export const TestContainer = styled.div`
    width: 100%;
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