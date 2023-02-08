import { connect } from 'react-redux';
import { createTemporaryTest, changeActiveTest } from '../../../actions';

import {
    Container,
    TabContainer,
    Tab,
    FormContainer
} from './RequestContainer.styled';

import Request from './Request/Request';

const RequestContainer = (props) => {

    // #TODO 1: Save new test
    const handleTabClick = (id, isNew) => {
        if (isNew) {
            props.createTemporaryTest();
        } else {
            props.changeActiveTest(id);
        }
    }

    const getTab = () => {
        let tabs = Object.keys(props.opened).map((id) => {
            return (<Tab key={id} isActive={props.active === id} onClick={() => handleTabClick(id, false)}>
                {props.opened[id].title}
            </Tab>)
        })

        tabs.push(<Tab key={'CreateNew'} isActive={false} onClick={() => handleTabClick(null, true)}>
            {'+ Create New Test'}
        </Tab>)

        return tabs;
    }

    return (
        <Container>
            <TabContainer>
                {getTab()}
            </TabContainer>
            <FormContainer>
                {
                    Object.keys(props.opened).length > 0 ?
                        <Request data={props.opened[props.active]} /> :
                        <div>None</div>
                }
            </FormContainer>
        </Container>
    )
}
const mapStateToProps = (state) => {
    return { opened: state.opened, active: state.active }
}

export default connect(mapStateToProps, { changeActiveTest, createTemporaryTest })(RequestContainer);