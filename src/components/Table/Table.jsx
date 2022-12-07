import {
    Container,
    TableWrapper,
    StyledTable,
    TableHead,
    TableHeader,
    TableBody,
    TableRow,
    TableData,
    TableDataInput
} from './Table.styled'

const Table = ({ headers, data, onChange, hasPlaceHolder }) => {

    const populateBody = () => {
        return data.map((row, rowIdx) => {
            if (hasPlaceHolder && rowIdx === data.length - 1) {
                return (<TableRow key={rowIdx}>
                    {headers.map((col, colIdx) => {
                        return (<TableData key={colIdx}>
                            <TableDataInput id={col.key} placeholder={row[col.key]} value={''} onChange={(e) => onChange(e, rowIdx)} />
                        </TableData>)
                    })}
                </TableRow>)
            } else {
                return (
                    <TableRow key={rowIdx}>
                        {headers.map((col, colIdx) => {
                            return (<TableData key={colIdx}>
                                <TableDataInput id={col.key} value={row[col.key]} onChange={(e) => onChange(e, rowIdx)} />
                            </TableData>)
                        })}
                    </TableRow>
                )
            }
        });
    }

    return (
        <Container>
            <TableWrapper>
                <StyledTable>
                    <TableHead>
                        <TableRow>
                            {
                                headers.map((col) => {
                                    return <TableHeader key={col.key}>{col.label}</TableHeader>
                                })
                            }

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {populateBody()}
                    </TableBody>
                </StyledTable>
            </TableWrapper>
        </Container>
    )
}

export default Table