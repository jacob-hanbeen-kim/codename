import styled from 'styled-components'

import Dropdown from '../Dropdown/Dropdown';

const darkGrey = '#525252';
const grey = '#999999';
const lightGrey = '#EFEFEF'

export const Container = styled.div`
    /* position: relative; */
    /* background-color: ${({ theme }) => theme.color.background}; */
`

export const TableWrapper = styled.div`
    /* position: absolute; */
    /* top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    overflow: auto; */
    height: 100%;
    overflow-y: scroll;
`

export const StyledTable = styled.table`
    min-width: 100%;
    min-height: 100%;

    border-collapse: collapse;
    border: 1px solid ${grey};
    text-align: left;
    
    /* & th:first-child, */
    /* & td:first-child { */
        /* Apply a right border on the first <td> or <th> in a row */
        /* border-right: 1px solid ${({ theme }) => theme.color.border}; */
    /* } */
    /* & td:first-child:hover {
        cursor: pointer;
    } */
    & th,
    & td {
        border: 1px solid ${grey};
        /* overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis; */
    }
`

export const TableHead = styled.thead`
`

export const TableHeader = styled.th`
    color: ${darkGrey};
    text-transform: uppercase;
    font-size: 12px;
    padding: 8px 10px;
`

export const TableBody = styled.tbody`
`

export const TableRow = styled.tr`
    &:focus-within {
        background-color: ${lightGrey};
    }
`

export const TableData = styled.td`
    padding: 3px;
`

export const TableDataInput = styled.input`
    width: 100%;
    font-size: 14px;
    padding: 3px;

    border: 1px solid transparent;
    background-color: transparent;

    &:focus {
        border: 1px solid ${grey};
        outline: none;
        background-color: white;
    }
`

export const TableDropdown = styled(Dropdown)`
    margin: 0px;

    & > select {
        border: 0px;
        padding: 3px;
    }
`