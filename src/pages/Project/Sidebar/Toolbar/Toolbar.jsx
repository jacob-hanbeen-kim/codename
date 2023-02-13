import {
    Container,
    NavContainer,
    Nav,
    StyledNavLink
} from './Toolbar.styled'

const Toolbar = () => {

    return (
        <Container>
            <NavContainer>
                <Nav>
                    <StyledNavLink to="request">R</StyledNavLink>
                    <StyledNavLink to="execution">E</StyledNavLink>
                </Nav>
            </NavContainer>
        </Container >
    )
}

export default Toolbar