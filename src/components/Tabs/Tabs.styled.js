import styled from 'styled-components'

const getBorder = (props) => {
    if (props.noBorder) {
        return ''
    } else {
        return `
            border-top: 1px solid #222222;
            border-bottom: 1px solid #222222;
        `
    }
}

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    align-items: center;
    width: 100%;
`

export const TabContainer = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    z-index: 9;
    /* ${(props) => getBorder(props)} */
    
    width: 100%;
    padding: 0px 10px;
    position: ${props => props.sticky ? 'sticky' : 'relative'};
    ${props => props.sticky && `
        top: 3.4rem;   
    `}
    overflow: hidden;
    background-color: ${({ theme }) => theme.color.background};
`

export const TabItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${({ align }) => align ? align : 'center'};
    align-items: center;
    
    width: 100%;

    // make scrollable
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;

    @media screen and (max-width: ${({ theme }) => theme.screen.sizeM}){
        justify-content: flex-start;
    }
`

export const Tab = styled.a`
    color: ${({ theme }) => theme.color.onBackground};
    opacity: ${({ isActive }) => isActive ? '1.0' : '0.75'};
    border-bottom: ${({ isActive, theme }) =>
        isActive ? `3px solid ${theme.color.primary}` : 'none'
    };

    /* margin: 0px 1.8rem; */
    padding: 15px 20px 5px 20px;
    font-size: 14px;
    text-decoration: none;
    &:hover {
        color: ${({ isActive, theme }) => !isActive && theme.color.primary};
    }
`

export const TabPanel = styled.div`
    /* min-height: 400px; */
    /* width: 100vw; */
    /* height: 100vh; */
    /* border: 0px; */
    /* margin: 0px; */
    /* padding: 0px; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`