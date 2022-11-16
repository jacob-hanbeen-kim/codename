import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
`
export const SidebarContainer = styled.div`
    flex: 1;
    height: 100%;
    border: 1px solid black;
`

export const Content = styled.div`
    flex: 5;
    height: 100%;
    border: 1px solid black;

    overflow-y: scroll;
`