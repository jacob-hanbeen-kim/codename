import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
`

export const TabContainer = styled.div`
    /* height: 10%; */
    padding-top: 10px;
    padding-left: 5px;

    overflow-x: scroll;
    border-bottom: 1px solid black;
`

export const Tab = styled.button`
    height: 30px;
    min-width: 200px;

    border: 1px solid #252525;
    /* border-bottom: ${({ isActive }) => isActive && 'none'}; */

    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;

    margin-right: 5px;

    background-color: ${({ isActive }) => isActive ? '#ffffff' : '#dadada'};

    cursor: pointer;
`

export const FormContainer = styled.div`
    height: 95%;
`