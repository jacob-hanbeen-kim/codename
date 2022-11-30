import { useState } from 'react';
import { apiService } from '../../../services/api';
import {
    Container,
    Form,
    Row,
    Col
} from './Request.styled';

import Dropdown from '../../../components/Dropdown/Dropdown';

function IsJsonString(str) {
    try {
        var json = JSON.parse(str);
        return (typeof json === 'object');
    } catch (e) {
        return false;
    }
}

const httpRequest = [
    { label: 'GET', value: 'get' },
    { label: 'POST', value: 'post' },
    { label: 'PUT', value: 'put' },
    { label: 'DELETE', value: 'delete' }
]

const Request = () => {

    let [testData, setTestData] = useState([]);
    let [request, setRequest] = useState({
        url: "",
        method: "get",
        body: "",
        header: ""
    });
    let [response, setResponse] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        let req = {}
        for (var attr in request) {
            if (request[attr] !== "") {
                req[attr] = request[attr];
            }
        }

        console.log(req);

        apiService.sendRequest(req).then((res) => {
            console.log(res);
            setResponse(res);
        });
    }

    const handleOnChange = (e) => {
        setRequest({ ...request, [e.target.name]: e.target.value });
        // console.log(request);
    }

    const handleTestData = (e) => {
        setTestData(e.target.value);
        // if (IsJsonString(val)) {
        //     JSON.stringify(JSON.parse(e.target.value), null, 4);
        // }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Row flex={2} >
                    <Col>
                        <textarea value={testData} onChange={handleTestData} rows='8' cols='30' />
                    </Col>
                </Row>
                <Row flex={1}>
                    <Col flex={1}>
                        <Dropdown
                            name="method"
                            required={true}
                            options={httpRequest}
                            defaultValue={'get'}
                            onChange={handleOnChange}
                        />
                    </Col>
                    <Col flex={7}>
                        <input type='text' name='url' onChange={handleOnChange} placeholder='Enter request URL' />
                    </Col>
                    <Col flex={1}>
                        <input type="submit" value="Send" />
                    </Col>
                </Row>
                <Row flex={4}>
                    <Col>
                    </Col>
                </Row>
                <Row flex={8}>
                    <Col>
                        <textarea value={JSON.stringify(response, null, 4)} readOnly rows='20' cols='30' />
                    </Col>
                    <Col>
                        <Row></Row>
                        <Row></Row>
                    </Col>
                </Row>
            </Form>
        </Container >
    )
}

export default Request