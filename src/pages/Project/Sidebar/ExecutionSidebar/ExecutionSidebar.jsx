import React, { useEffect } from 'react'
// Redux
import { connect } from 'react-redux';
import { fetchAllExecutions, fetchExecutionById } from '../../../../actions';

// Styles
import {
    ButtonContainer,
    Title
} from './ExecutionSidebar.styled';

const ExecutionSidebar = (props) => {

    useEffect(() => {
        props.fetchAllExecutions();
    }, [])

    const handleClick = (id, e) => {
        props.fetchExecutionById(id);
    }

    return (
        <>
            {props.executions.map((test) => {
                return (
                    <ButtonContainer key={test.id} onClick={e => handleClick(test.id, e)}>
                        <Title>{test.title}</Title>
                    </ButtonContainer>
                )
            })}
        </>
    )
}

const mapStateToProps = (state) => {
    return { executions: state.executions }
}

export default connect(mapStateToProps, { fetchAllExecutions, fetchExecutionById })(ExecutionSidebar);