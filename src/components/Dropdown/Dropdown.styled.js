import styled from 'styled-components'

export const Container = styled.div`
    /* width: 250px; */
    margin: 10px 0px;
`

export const Select = styled.select`
    padding: 10px;
    /* border-radius: 5px; */
    border: 1px solid gray;
    width: 100%;
    ${({ value }) => value === '' && 'color: rgb(118, 118, 118)'}
`

export const Option = styled.option`
    
`