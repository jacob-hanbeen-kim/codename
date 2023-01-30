import {
    Container,
    TableWrapper,
    StyledTable,
    TableHead,
    TableHeader,
    TableBody,
    TableRow,
    TableData,
    TableDataInput,
    TableDropdown
} from './Table.styled'

const Table = ({ headers, data, onChange }) => {

    const populateBody = () => {
        return data.map((row, rowIdx) => {
            return (<TableRow key={rowIdx}>
                {headers.map((col, colIdx) => {
                    return (<TableData key={colIdx}>
                        {col.options ?
                            <TableDropdown
                                name="method"
                                required={false}
                                options={col.options}
                                placeholder={row[col.key]}
                                onChange={(e) => onChange(e, rowIdx)}
                            /> :
                            <TableDataInput
                                id={col.key}
                                placeholder={row[col.key]}
                                value={''}
                                onChange={(e) => onChange(e, rowIdx)}
                            />
                        }
                    </TableData>)
                })}
            </TableRow>)
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