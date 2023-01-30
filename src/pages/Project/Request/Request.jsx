import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../../../services/api';
import {
    Container,
    TabContainer,
    Tab,
    Form,
    Row,
    Col,
    Url,
    HorizontalLine
} from './Request.styled';

import Dropdown from '../../../components/Dropdown/Dropdown';
import Tabs from '../../../components/Tabs/Tabs';
import DataTable from './DataTable/DataTable';
import Action from './Action/Action';
import RequestBody from './RequestBody/RequestBody';
import { AssertOperators } from './AssertOperators';
import { DataType } from './DataType';

const httpRequest = [
    { label: 'GET', value: 'get' },
    { label: 'POST', value: 'post' },
    { label: 'PUT', value: 'put' },
    { label: 'DELETE', value: 'delete' }
]

const Request = () => {

    let navigate = useNavigate();

    let [method, setMethod] = useState('get');
    let [url, setUrl] = useState(null);
    let [queryParameters, setQueryParameters] = useState([]);
    let [headers, setHeaders] = useState([]);
    let [requestBody, setRequestBody] = useState(null);
    let [testData, setTestData] = useState([]);
    let [assert, setAssert] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        // console.log('body', {
        //     testData,
        //     assert,
        //     url,
        //     headers,
        //     method,
        //     requestBody,
        //     queryParameters
        // });

        apiService.sendRequest({
            url,
            headers,
            method,
            requestBody,
            queryParameters
        }).then((res) => {
            console.log(res);
            navigate('/project/execution', { state: { response: res.data, assert } });
        });
    }

    return (
        <Container>
            <TabContainer>
                <Tab>
                    sample test
                </Tab>
            </TabContainer>
            <Form onSubmit={handleSubmit}>
                <Row flex={1}>
                    <Col flex={1}>
                        <Dropdown
                            name="method"
                            required={true}
                            options={httpRequest}
                            defaultValue={'get'}
                            onChange={(e) => setMethod(e.target.value)}
                        />
                    </Col>
                    <Col flex={8}>
                        <Url type='text' name='url' onChange={(e) => setUrl(e.target.value)} placeholder='Enter request URL' />
                    </Col>
                </Row>
                <Row flex={6} align={'flex-start'}>
                    <Tabs align={'left'}>
                        <DataTable label="Params" data={queryParameters} setData={setQueryParameters}
                            headers={[
                                { key: "key", label: "Key" },
                                { key: "value", label: "Value" },
                                { key: "description", label: "Description" }
                            ]} />
                        <DataTable label="Headers" data={headers} setData={setHeaders}
                            headers={[
                                { key: "key", label: "Key" },
                                { key: "value", label: "Value" },
                                { key: "description", label: "Description" }
                            ]} />
                        <RequestBody label="Body" data={requestBody} setData={setRequestBody} />
                        <DataTable label="TestData" data={testData} setData={setTestData}
                            headers={[
                                { key: "key", label: "Key" },
                                { key: "value", label: "Value" }
                            ]} />
                    </Tabs>
                </Row>
                <HorizontalLine />
                <Row flex={6} align={'flex-start'}>
                    <Tabs align={'left'}>
                        <DataTable label="Assert" data={assert} setData={setAssert}
                            headers={[
                                { key: "path", label: "Path" },
                                { key: "operation", label: "Operation", options: AssertOperators },
                                { key: "expected", label: "Expected" },
                                { key: "dataType", label: "Data Type", options: DataType }
                            ]} />
                    </Tabs>
                </Row>
                <HorizontalLine />
                <Row flex={1}>
                    <Col flex={1}>
                        <Action />
                    </Col>
                </Row>
            </Form>
        </Container >
    )
}

export default Request