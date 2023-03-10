import styled from "styled-components";
import { FaPlus, FaTimes } from 'react-icons/fa';

export const Container = styled.div`
    height: 100%;
`

export const TabContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    /* height: 10%; */
    padding-top: 10px;
    padding-left: 5px;

    overflow-x: scroll;
    border-bottom: 1px solid black;
`

export const PlusIcon = styled(FaPlus)`
    &:hover {
        color: orange;
    }
`

export const TabCloseButton = styled(FaTimes)`
    &:hover {
        color: orange;
    }
`

export const TabTitle = styled.p`
    margin-left: 5px;
    overflow: hidden;
    width: 80%;
`

export const Tab = styled.button`
    height: 30px;
    min-width: ${({ isCreateNew }) => isCreateNew ? '40px' : '200px'};

    border: 1px solid #252525;
    /* border-bottom: ${({ isActive }) => isActive && 'none'}; */

    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;

    margin-right: 5px;

    background-color: ${({ isActive }) => isActive ? '#ffffff' : '#dadada'};

    cursor: pointer;

    display: flex;
    justify-content: ${({ isCreateNew }) => isCreateNew ? 'center' : 'space-between'};
    align-items: center;
    flex-direction: row;

    & ${TabCloseButton} {
        display: ${({ isActive }) => isActive ? 'block' : 'none'};
    }

    &:hover ${TabCloseButton} {
        display: block;
    }
`

export const FormContainer = styled.div`
    height: 95%;
`