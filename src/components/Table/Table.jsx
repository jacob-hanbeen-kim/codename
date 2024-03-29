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
                    let placeholder = '';
                    let value = row[col.key];
                    if (rowIdx === data.length - 1) {
                        placeholder = row[col.key];
                        value = '';
                    }

                    return (<TableData key={colIdx}>
                        {col.options ?
                            <TableDropdown
                                name="method"
                                required={false}
                                options={col.options}
                                placeholder={placeholder}
                                onChange={(e) => onChange(e, rowIdx)}
                            /> :
                            <TableDataInput
                                id={col.key}
                                placeholder={placeholder}
                                value={value}
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