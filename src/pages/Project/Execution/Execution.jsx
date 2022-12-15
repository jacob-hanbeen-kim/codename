import {
    Container
} from './Execution.styled'

import { useLocation } from 'react-router-dom'

const Execution = () => {

    const location = useLocation();

    console.log(location);

    return (
        <Container>
            <h3>Test Execution Result</h3>
            {location.state?.response.fact}
        </Container>
    )
}

export default Execution