import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

let topBarheight = '72px';

export const Container = styled.div`
    width: 100vw;
    z-index: 110;
    /* box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px; */
    /* transition: top 0.5s ease 0s; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
`

export const Topbar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: ${topBarheight};
    padding: 0px 20px;
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.onPrimary};
`

export const LogoContainer = styled.div`
    position: relative;
    height: inherit;
    z-index:1;
    /* width: inherit; */
`

export const SearchContainer = styled.div`
    
`

export const SearchIcon = styled(FaSearch)`
`

export const MenuContainer = styled.div`
    display: none;
    @media(max-width: ${({ theme }) => theme.screen.sizeM}) {
        display: flex;
        z-index:1;
    }
`

export const MenuIcon = styled(FaBars)`
    font-size: 1.2em;
    &:not(.active):hover ${({ disabled }) => disabled}{
        opacity: 0.7;
    }
`

export const CloseIcon = styled(FaTimes)`
    font-size: 1.2em;
    &:not(.active):hover ${({ disabled }) => disabled}{
        opacity: 0.7;
    }
`

export const NavContainer = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* background-color: ${({ theme }) => theme.color.background}; */
    /* height: 51px; */
    /* width: 100%; */
`

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    /* justify-content: space-around; */
    justify-content: center;
    align-items: center;
    /* width: 80%; */
    /* height: 100%; */
    /* border-bottom: 2px solid black; */
    @media(max-width: ${({ theme }) => theme.screen.sizeM}) {
        flex-direction: column;
        justify-content: flex-start;
        padding: 50px 0px;
        position: fixed;
        top: ${topBarheight};
        left: 0;
        width: 100vw;
        height: calc(100vh - ${topBarheight});
        background-color: ${({ theme }) => theme.color.primary};
        gap: 2em;
        opacity: 0;
        z-index:0;
        transition: all 0.5s ease;
        overflow-y: scroll;
        ${({ isVisible }) => isVisible ?
        `
        top: ${topBarheight};
        opacity: 1;
        ` :
        `
        top: -100vh;
        opacity: 0;
        `
    };
    }
`

export const StyledNavLink = styled(NavLink)`
    display: inline-block;
    text-align: center;
    text-decoration: none;
    padding: 0px 20px;
    
    color: ${({ theme }) => theme.color.onPrimary};
    height: 100%;
    &.active {
        /* color: ${({ theme }) => theme.color.primary}; */
        color: ${({ theme }) => theme.color.secondary};
        font-weight: bold;
    }
    &:not(.active):hover ${({ disabled }) => disabled}{
        opacity: 0.7;
    }
    ${({ disabled }) => disabled && 'cursor: default;'}
    @media(max-width: ${({ theme }) => theme.screen.sizeM}) {
        height: auto;
    }
`