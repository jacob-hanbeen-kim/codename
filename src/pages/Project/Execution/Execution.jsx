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
import { runTests } from '../../../businessLogic/assert';

const TestStatus = {
    pass: 'PASS',
    fail: 'FAIL',
    running: 'RUNNING',
    pending: 'PENDING',
    skipped: 'SKIPPED'
}

const Execution = () => {

    const location = useLocation();
    const [testResult, setTestResult] = useState([]);


    let getStatus = (status) => {
        switch (status) {
            case 'pending': return <Spinner />;
            case 'pass': return <PassIcon />;
            case 'fail': return <FailIcon />;
            default: return <Spinner />;
        }
    }

    useEffect(() => {
        console.log(location.state)
        if (location.state) {
            let results = runTests(location.state.response, location.state.assert);
            setTestResult(results);
        }
    }, [location.state])

    return (
        <Container>
            <Wrapper>
                <h3>Test Execution Result</h3>
                <TestContainer>
                    {testResult.map((result) => {
                        console.log(result)
                        return (
                            <TestCase key={result.title}>
                                <StatusContainer>{getStatus(result.status)}</StatusContainer>
                                <TestTitle>{result.title}</TestTitle>
                                {
                                    // if fail display error message
                                }
                            </TestCase>
                        )
                    })}
                </TestContainer>
            </Wrapper>
        </Container>
    )
}

export default Execution