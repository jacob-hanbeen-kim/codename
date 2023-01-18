import { useEffect, useState } from 'react';
import Dropdown from '../../../../components/Dropdown/Dropdown';
import {
    Container,
    Wrapper,
    Button
} from './Action.styled';

const Action = () => {

    const [isLoading, setLoading] = useState(false);
    const [environments, setEnvironments] = useState({});

    useEffect(() => {
        setLoading(true);
        //#TODO: fetch all user environments
        setEnvironments({
            qa: {
                url: "https://localhost:3000/qa"
            },
            staging: {
                url: "https://localhost:3000/staging"
            }
        })

        console.log(Object.keys(environments));
        setLoading(false);
    }, [])

    return (

        <Container>
            {!isLoading &&
                <>
                    <Wrapper>
                        <Dropdown
                            name="env"
                            required={true}
                            options={Object.keys(environments)}
                            defaultValue={'qa'}
                            onChange={(e) => { console.log(e.target.value) }}
                        />
                    </Wrapper>
                    <Wrapper>
                        <Button type='button'>Save</Button>
                        <Button type='submit'>Run Test</Button>
                    </Wrapper>
                </>
            }
        </Container>

    )
}

export default Action