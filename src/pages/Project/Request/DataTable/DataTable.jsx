
import {
    Contaiiner
} from './DataTable.styled';

import { useEffect, useState } from 'react';
import Table from '../../../../components/Table/Table';

const DataTable = ({ headers }) => {

    let [data, setData] = useState([]);
    let [placeHolder, setPlaceholder] = useState(null);

    const handleDataChange = (e, idx) => {
        // console.log(e.target.id, e.target.value, idx, data.length);
        if (idx < data.length) {
            // 1. Make a shallow copy of the data
            let tempData = [...data];
            // 2. Make a shallow copy of the item you want to mutate
            let item = { ...tempData[idx] };
            // 3. Replace the property you're intested in
            item[e.target.id] = e.target.value;
            // 4. Put it back into our array. N.B. we *are* mutating the array here, 
            //    but that's why we made a copy first
            tempData[idx] = item;
            // 5. Set the state to our new copy
            setData(tempData);
        } else {
            let initData = {};
            headers.forEach((header) => {
                if (e.target.id === header.key) {
                    initData[e.target.id] = e.target.value;
                } else {
                    initData[header.key] = '';
                }
            })
            setData([...data, initData]);
        }
    }

    const getData = () => {
        if (placeHolder) {
            return [...data, placeHolder];
        }

        return data;
    }

    useEffect(() => {
        let initData = {};
        headers.forEach((header) => {
            initData[header.key] = header.label;
        })
        setPlaceholder(initData);
    }, [])

    useEffect(() => {
        console.log(data);
    }, [data])

    return (
        <Contaiiner>
            <Table headers={headers} data={getData()} hasPlaceHolder={true} onChange={handleDataChange} />
        </Contaiiner>
    )
}

export default DataTable