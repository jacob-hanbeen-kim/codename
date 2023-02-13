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
import { useLocation } from 'react-router-dom';

const Sidebar = () => {

    const location = useLocation();
    const [display, setDisplay] = useState(<RequestSidebar />);

    const getSidebarItem = () => {
        switch (location.pathname) {
            case '/project/request': return <RequestSidebar />
            case '/project/execution': return <ExecutionSidebar />
            default: return <RequestSidebar />
        }
    }

    useEffect(() => {
        console.log(location.pathname);
        setDisplay(getSidebarItem());
    }, [location.pathname])

    return (
        <Container>
            <Wrapper>
                <Toolbar />
                {display}
            </Wrapper>
        </Container>
    )
}

export default Sidebar;