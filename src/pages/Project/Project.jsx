import {
    Container,
    Wrapper,
    SidebarContainer,
    Content
} from './Project.styled';

import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';

const Project = () => {

    return (
        <Container>
            <Wrapper>
                <SidebarContainer>
                    <Sidebar />
                </SidebarContainer>
                <Content>
                    <Outlet />
                </Content>
            </Wrapper>
        </Container>
    )
}

export default Project