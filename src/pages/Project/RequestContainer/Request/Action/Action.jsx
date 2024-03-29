import { useEffect, useState } from 'react';

import Dropdown from '@codename/components/Dropdown/Dropdown';
import {
    Container,
    Wrapper,
    Button
} from './Action.styled';

const Action = ({ onSave }) => {

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
                            onChange={(e) => { console.log(e.target.value) }}
                            value={'qa'}
                        />
                    </Wrapper>
                    <Wrapper>
                        <Button type='button' onClick={onSave}>Save</Button>
                        <Button type='submit'>Run Test</Button>
                    </Wrapper>
                </>
            }
        </Container>

    )
}

export default Action;