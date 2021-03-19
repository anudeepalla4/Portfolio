import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import CssProjects from '../../components/CssProjects';

function Index() {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    console.log("projects")
    return (
        <div className='container mt-3'>
            <h2 className='text-center'>Projects</h2>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        CSS
                </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        React
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => { toggle('3'); }}
                    >
                        Node js
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '4' })}
                        onClick={() => { toggle('4'); }}
                    >
                        React native
                </NavLink>
                </NavItem>
            </Nav>

            <TabContent activeTab={activeTab} className='mt-3'>
                <TabPane tabId="1">
                   <CssProjects />
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                       <Col md='12'>
                       <h4>Tab 2 Contents</h4>
                       </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <Row>
                       <Col md='12'>
                       <h4>Tab 3 Contents</h4>
                       </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="4">
                    <Row>
                       <Col md='12'>
                       <h4>Tab 4 Contents</h4>
                       </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    )
}

export default Index
