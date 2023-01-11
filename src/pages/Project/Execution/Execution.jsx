import {
    Container,
    Wrapper,
    TestContainer,
    TestCase,
    TestTitle,
    StatusContainer,
    PassIcon,
    FailIcon
} from './Execution.styled'

import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Spinner from '../../../components/Spinner/Spinner';

const TestStatus = {
    pass: 'PASS',
    fail: 'FAIL',
    running: 'RUNNING',
    pending: 'PENDING',
    skipped: 'SKIPPED'
}

const Execution = () => {

    const location = useLocation();
    const [isComplete, setComplete] = useState(true);
    const [testResult, setTestResult] = useState({});

    let assert = (key, value) => {
        setTestResult(prevState => ({ ...prevState, [key]: TestStatus.pending }))
        if (location.state.response[key] === value) {
            setTestResult(prevState => ({ ...prevState, [key]: TestStatus.pass }))
        } else {
            setTestResult(prevState => ({ ...prevState, [key]: TestStatus.fail }))
        }
    }

    let getStatus = (key) => {
        // console.log(key, testResult);
        switch (testResult[key]) {
            case TestStatus.pending: return <Spinner />;
            case TestStatus.pass: return <PassIcon />;
            case TestStatus.fail: return <FailIcon />;
            default: return <Spinner />;
        }
    }

    useEffect(() => {
        location.state.assert.forEach((a) => {
            assert(a.key, a.value);
        })
    }, [])

    // useEffect(() => {
    //     console.log(testResult);
    // }, [testResult])

    return (
        <Container>
            <Wrapper>
                <h3>Test Execution Result</h3>
                <TestContainer>
                    {location.state.assert.map((a) => {
                        return (
                            <TestCase key={a.key}>
                                <StatusContainer>{getStatus(a.key)}</StatusContainer>
                                <TestTitle>{a.key}</TestTitle>
                            </TestCase>
                        )
                    })}
                </TestContainer>
            </Wrapper>
        </Container>
    )
}

export default Execution