import Sidebar from './Sidebar/Sidebar';
import Request from './Request/Request';
import {
    Container,
    Wrapper,
    SidebarContainer,
    Content
} from './Test.styled';

const Test = () => {

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

export default Test