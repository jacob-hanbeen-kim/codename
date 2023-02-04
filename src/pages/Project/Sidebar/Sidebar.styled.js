import styled from "styled-components";

export const Container = styled.div`
    /* position: absolute; */
    width: 100%;
`

export const Wrapper = styled.div`
    /* position: relative;
    top: 0;
    left:0; */

    /* width: 100%; */
`

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

const methodColor = (method) => {
    switch (method.toLowerCase()) {
        case 'get': return '#008000';
        case 'post': return '#FF8C00';
        case 'put': return '#0000CD';
        case 'delete': return '#DC143C';
        default: return '#232323';
    }
}

export const Method = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;

    width: 20%;
    margin-right: 5px;

    color: ${({ method }) => methodColor(method)};

    pointer-events: none;

`

export const Title = styled.p`
    width: 70%;
    pointer-events: none;
`