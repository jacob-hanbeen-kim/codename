import {
    Container,
    Wrapper,
    TestContainer,
    ResponseContainer,
    TestCaseContainer,
    TestCase,
    TestTitle,
    StatusContainer,
    PassIcon,
    FailIcon,
    ResponseTextArea
} from './Execution.styled'

import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Spinner from '../../../components/Spinner/Spinner';
import { runTests } from '../../../businessLogic/assert';

const Execution = () => {

    const location = useLocation();
    const [testResult, setTestResult] = useState([]);
    const [response, setResponse] = useState([]);

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
            setResponse(location.state.response);

            let results = runTests(location.state.response, location.state.assert);
            setTestResult(results);
        }
    }, [location.state])

    return (
        <Container>
            <Wrapper>
                <TestContainer>
                    <h3>Test Execution Result</h3>
                    <TestCaseContainer>
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
                    </TestCaseContainer>
                </TestContainer>
                <ResponseContainer>
                    <ResponseTextArea value={JSON.stringify(response, undefined, 4)} readonly />
                </ResponseContainer>
            </Wrapper>
        </Container>
    )
}

export default Execution