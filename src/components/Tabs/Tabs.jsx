import {
    Wrapper,
    TabContainer,
    TabItems,
    Tab,
    TabPanel,
} from './Tabs.styled';

import React, { useEffect, useState } from 'react';

const Tabs = ({
    children,
    align,
    onClick,
    sticky,
    top,
    noBorder
}) => {

    const [activeTab, setActiveTab] = useState(null);

    const handleClick = (e, newActiveTab) => {
        e.preventDefault();
        onClick && onClick(newActiveTab);
        setActiveTab(newActiveTab);
    };

    useEffect(() => {
        setActiveTab(React.Children.toArray(children)[0].props.label);
    }, [])

    return (
        <Wrapper>
            <TabContainer sticky={sticky} stickAt={top} noBorder={noBorder}>
                <TabItems align={align}>
                    {
                        React.Children.map(children, function (child, idx) {
                            const label = child.props.label;
                            if (label) {
                                return (
                                    <>
                                        {/* {idx !== 0 && <div>|</div>} */}
                                        <Tab href='#profile' onClick={(e) => handleClick(e, label)} isActive={label === activeTab}>
                                            {label}
                                        </Tab>
                                    </>
                                );
                            }
                        })
                    }
                </TabItems>
            </TabContainer>
            <TabPanel>
                {
                    React.Children.map(children, function (child) {
                        if (activeTab === child.props.label) return child;
                    })
                }
            </TabPanel>
        </Wrapper>
    )
}

Tabs.defaultProps = {
    sticky: true,
    variant: 'default'
}

export default Tabs