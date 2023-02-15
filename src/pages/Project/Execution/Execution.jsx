import { connect } from 'react-redux';
import { createExecutionHistory } from '@codename/actions';

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
import Spinner from '@codename/components/Spinner/Spinner';
import { runTests } from '@codename/businessLogic/assert';

const Execution = (props) => {

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
        if (Object.keys(props.openedExecution).length > 0) {
            console.log('props: ', props.openedExecution)
            setResponse(props.openedExecution.response);
            setTestResult(props.openedExecution.results);
        }
    }, [props.openedExecution])

    useEffect(() => {
        // #TODO: change this to fetch using redux --> create new execution and display execution history
        if (location.state) {
            console.log('state: ', location.state)
            setResponse(location.state.response);

            let results = runTests(location.state.response, location.state.assert);
            setTestResult(results);
            createExecutionHistory(location.state.title, location.state.id, location.state.response, results);
        }
    }, [location.state])

    return (
        <Container>
            <Wrapper>
                <TestContainer>
                    <h3>Test Execution Result</h3>
                    <TestCaseContainer>
                        {testResult.map((result) => {
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
                    <ResponseTextArea value={JSON.stringify(response, undefined, 4)} onChange={(e) => console.log(e)} readonly />
                </ResponseContainer>
            </Wrapper>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return { openedExecution: state.openedExecution }
}

export default connect(mapStateToProps, { createExecutionHistory })(Execution);