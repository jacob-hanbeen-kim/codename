import {
    Container,
    Select,
    Option
} from './Dropdown.styled'
import { useEffect, useState } from 'react';

const Dropdown = (props) => {
    const [val, setValue] = useState('');
    const [dropdownOption, setOption] = useState([]);

    const { options, placeholder, value, onChange, className, ...selectProps } = props;

    const handleOnChange = (event) => {
        setValue(event.target.value);
        onChange(event)
    }

    useEffect(() => {
        if (value) setValue(value);
    }, [value])

    useEffect(() => {
        if (options && options[0] !== null && typeof options[0] !== 'object') {
            let newObject = [];
            options.forEach((option) => {
                newObject.push({
                    label: option,
                    value: option
                })
            })
            setOption(newObject);
        } else {
            setOption(options)
        }
    }, [options])

    return (
        <Container className={className}>
            <Select {...selectProps} value={val} onChange={handleOnChange}>
                <Option value='' hidden={true}>{placeholder}</Option>
                {
                    dropdownOption && dropdownOption.map((option, i) =>
                        <Option key={i} value={option.value}>{option.label}</Option>
                    )
                }
            </Select>
        </Container>
    )
}

export default Dropdown