import React, { useEffect } from 'react'

import {
    Container,
    Wrapper
} from './Sidebar.styled';

import Toolbar from './Toolbar/Toolbar';

import { connect } from 'react-redux';
import { fetchUser } from '../../../actions';

const Sidebar = (props) => {

    useEffect(() => {
        props.fetchUser(1);
    }, [])

    return (
        <Container>
            <Wrapper>
                <Toolbar />
                {props.users.map((user, idx) => {
                    return (
                        <div key={idx}>
                            {user.name}
                        </div>
                    )
                })}
            </Wrapper>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return { users: state.users }
}

export default connect(mapStateToProps, { fetchUser })(Sidebar);