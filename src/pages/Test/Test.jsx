import React from 'react'
import Button from '../../components/Button/Button';
import Sidebar from './Sidebar/Sidebar';
import {
    Container,
    Wrapper,
    SidebarContainer,
    Content
} from './Test.styled';

const Test = () => {

    const handleSubmitRequest = () => {

    }

    return (
        <Container>
            <Wrapper>
                <SidebarContainer>
                    <Sidebar />
                </SidebarContainer>
                <Content>
                    <Button />
                </Content>
            </Wrapper>
        </Container>
    )
}

export default Test