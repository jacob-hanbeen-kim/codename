import {
    Container,
    NavContainer,
    Nav,
    StyledNavLink
} from './Toolbar.styled'

const Toolbar = ({ onClick }) => {

    return (
        <Container>
            <NavContainer>
                <Nav>
                    <StyledNavLink to="request" onClick={() => onClick('request')}>R</StyledNavLink>
                    <StyledNavLink to="execution" onClick={() => onClick('execution')}>E</StyledNavLink>
                </Nav>
            </NavContainer>
        </Container>
    )
}

export default Toolbar