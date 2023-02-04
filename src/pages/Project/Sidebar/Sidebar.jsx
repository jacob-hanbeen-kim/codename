import React, { useEffect } from 'react'
// Redux
import { connect } from 'react-redux';
import { fetchTests, fetchTest } from '../../../actions';

// Style
import {
    Container,
    Wrapper,
    ButtonContainer,
    Method,
    Title,
} from './Sidebar.styled';

// Components
import Toolbar from './Toolbar/Toolbar';

const Sidebar = (props) => {

    useEffect(() => {
        props.fetchTests();
    }, [])

    const handleClick = (id, e) => {
        props.fetchTest(id);
    }

    return (
        <Container>
            <Wrapper>
                <Toolbar />
                {props.collection.map((test) => {
                    return (
                        <ButtonContainer key={test.id} onClick={e => handleClick(test.id, e)}>
                            <Method method={test.method}>{test.method}</Method>
                            <Title>{test.title}</Title>
                        </ButtonContainer>
                    )
                })}
            </Wrapper>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return { collection: state.collection }
}

export default connect(mapStateToProps, { fetchTests, fetchTest })(Sidebar);