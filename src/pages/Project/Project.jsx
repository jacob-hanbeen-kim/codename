import Sidebar from './Sidebar/Sidebar';
import Request from './Request/Request';
import {
    Container,
    Wrapper,
    SidebarContainer,
    Content
} from './Project.styled';

const Project = () => {

    return (
        <Container>
            <Wrapper>
                <SidebarContainer>
                    <Sidebar />
                </SidebarContainer>
                <Content>
                    <Request />
                </Content>
            </Wrapper>
        </Container>
    )
}

export default Project