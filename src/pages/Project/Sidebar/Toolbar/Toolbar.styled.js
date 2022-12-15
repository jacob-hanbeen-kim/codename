import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

let topBarheight = '72px';

export const Container = styled.div`
    width: 100%;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: sticky;
    /* top: ${topBarheight}; */
    /* top: 40px; */
    /* background-color: ${({ theme }) => theme.color.background}; */
`

export const NavContainer = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 51px;
    width: 100%;
`

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 800px;
    height: 100%;
    border-bottom: 1px solid #212121;
`

export const StyledNavLink = styled(NavLink)`
    display: inline-block;
    text-align: center;
    text-decoration: none;
    padding: 15px 20px;
    
    color: ${({ theme }) => theme.color.primary};
    height: 100%;
    &.active {
        font-weight: bold;
    }
    &:not(.active):hover {
        opacity: 0.7;
    }
`