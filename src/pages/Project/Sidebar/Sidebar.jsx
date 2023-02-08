// Style
import {
    Container,
    Wrapper
} from './Sidebar.styled';

// Components
import Toolbar from './Toolbar/Toolbar';
import RequestSidebar from './RequestSidebar/RequestSidebar';
import ExecutionSidebar from './ExecutionSidebar/ExecutionSidebar';
import { useEffect, useState } from 'react';

const Sidebar = (props) => {

    const [path, setPath] = useState();

    const getSidebarItem = () => {
        switch (path) {
            case 'request': return <RequestSidebar />
            case 'execution': return <ExecutionSidebar />
            default: return <RequestSidebar />
        }
    }

    return (
        <Container>
            <Wrapper>
                <Toolbar onClick={setPath} />
                {getSidebarItem()}
            </Wrapper>
        </Container>
    )
}

export default Sidebar;