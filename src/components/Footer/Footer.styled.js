import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    z-index: 110;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 25px;
    padding: 0px 20px;
    /* background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.onPrimary};
    & p {
        color: ${({ theme }) => theme.color.onPrimary};
        opacity: 80%;
        font-size: 0.8em;
    } */
`