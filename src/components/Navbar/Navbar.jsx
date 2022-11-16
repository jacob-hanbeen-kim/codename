import { useState } from 'react'
import Logo from '../Logo/Logo'
import {
    Container,
    Topbar,
    LogoContainer,
    SearchContainer,
    // SearchIcon,
    MenuContainer,
    MenuIcon,
    CloseIcon,
    NavContainer,
    Nav,
    StyledNavLink
} from './Navbar.styled'

const Navbar = () => {

    let [isOpen, setMenuOpen] = useState(false);

    const handleMenuBar = () => {
        if (isOpen) {
            if (typeof window != 'undefined' && window.document) {
                document.body.style.overflow = 'unset';
            }
        } else {
            //#TODO: 만약 안누르고 스크린 싸이즈 바꾸면 지금 hidden 으로 stuck 됨
            if (typeof window != 'undefined' && window.document) {
                document.body.style.overflow = 'hidden';
            }
        }

        setMenuOpen(!isOpen);
    }

    return (
        <Container>
            <Topbar>
                {/* <SearchContainer>
                    <SearchIcon />
                </SearchContainer> */}
                <LogoContainer>
                    <Logo />
                </LogoContainer>
                <NavContainer>
                    <Nav isVisible={isOpen} onClick={() => { isOpen && handleMenuBar() }}>
                        <StyledNavLink to="/">Home</StyledNavLink>
                        <StyledNavLink to="/test">Test</StyledNavLink>
                    </Nav>
                </NavContainer>
                <MenuContainer>
                    {isOpen ?
                        <CloseIcon onClick={handleMenuBar} /> :
                        <MenuIcon onClick={handleMenuBar} />
                    }
                </MenuContainer>
            </Topbar>

        </Container>
    )
}

export default Navbar