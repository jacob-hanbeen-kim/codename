import React, { useEffect } from 'react'
// Redux
import { connect } from 'react-redux';
import { fetchTests, fetchTest } from '../../../../actions';

// Styles
import {
    ButtonContainer,
    Method,
    Title
} from './RequestSidebar.styled';

const RequestSidebar = (props) => {

    useEffect(() => {
        props.fetchTests();
    }, [])

    const handleClick = (id, e) => {
        props.fetchTest(id);
    }

    return (
        <>
            {props.collection.map((test) => {
                return (
                    <ButtonContainer key={test.id} onClick={e => handleClick(test.id, e)}>
                        <Method method={test.method}>{test.method}</Method>
                        <Title>{test.title}</Title>
                    </ButtonContainer>
                )
            })}
        </>
    )
}

const mapStateToProps = (state) => {
    return { collection: state.collection }
}

export default connect(mapStateToProps, { fetchTests, fetchTest })(RequestSidebar);