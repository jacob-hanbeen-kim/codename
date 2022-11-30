import {
    Container,
    Select,
    Option
} from './Dropdown.styled'
import { useEffect, useState } from 'react';

const Dropdown = (props) => {
    const [value, setValue] = useState('');
    const { options, placeholder, defaultValue, onChange, ...selectProps } = props;

    const handleOnChange = (event) => {
        setValue(event.target.value);
        onChange(event)
    }

    useEffect(() => {
        if (defaultValue) setValue(defaultValue);
    }, [])

    return (
        <Container>
            <Select {...selectProps} value={value} onChange={handleOnChange}>
                <Option value='' hidden={true}>{placeholder}</Option>
                {
                    options && options.map((option, i) =>
                        <Option key={i} value={option.value}>{option.label}</Option>
                    )
                }
            </Select>
        </Container>
    )
}

export default Dropdown