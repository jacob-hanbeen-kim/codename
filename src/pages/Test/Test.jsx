import React, { useEffect, useState } from 'react'
import Button from '../../components/Button/Button';
import { apiService } from '../../services/api';
import Sidebar from './Sidebar/Sidebar';
import {
    Container,
    Wrapper,
    SidebarContainer,
    Content
} from './Test.styled';

let data = require('./data.json');

const Test = () => {

    let [req, setReq] = useState();

    const handleSubmitRequest = () => {
        apiService.sendRequest(req).then((res) => {
            console.log(res);
        });
    }

    useEffect(() => {
        setReq(data);
    }, [])

    return (
        <Container>
            <Wrapper>
                <SidebarContainer>
                    <Sidebar />
                </SidebarContainer>
                <Content>
                    <Button onClick={handleSubmitRequest} />
                </Content>
            </Wrapper>
        </Container>
    )
}

export default Test