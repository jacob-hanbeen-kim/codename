import styled from 'styled-components';

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    padding: 10px;

    width: 100%;
    height: 50px;

    overflow: hidden;
    cursor: pointer;

    border-bottom: 1px solid black;

    &:hover {
        background-color: #bababa;
    }
`

export const Title = styled.p`
    width: 70%;
    pointer-events: none;
`