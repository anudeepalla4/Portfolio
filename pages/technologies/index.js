import React from 'react'
import { Card, CardBody, CardTitle, Progress, Row, Col } from 'reactstrap';

function Index() {
    return (
        <div className='container-fluid d-flex flex-column justify-content-center technology-screen'>
            <h1 className="text-white text-center">Technologies Known</h1>
            <Row>
                <Col md='4'>
                    <Card className="animate__animated animate__fadeInUp">
                        <CardBody>
                            <CardTitle >UI Design</CardTitle>
                            <div className="text-left"><strong>HTMl</strong></div>
                            <Progress value={80} >{80}%</Progress>
                            <div className="text-left"><strong>CSS</strong></div>
                            <Progress value={80}>{80}%</Progress>
                            <div className="text-left"><strong>SCSS</strong></div>
                            <Progress value={70}>{70}%</Progress>
                            <div className="text-left"><strong>Javascript</strong></div>
                            <Progress value={65}>{65}%</Progress>

                        </CardBody>
                    </Card>
                </Col>
                <Col md='4'>
                    <Card className='animate__animated animate__fadeInUp animate__delay-1s'>
                        <CardBody>
                            <CardTitle>Frameworks</CardTitle>
                            <div className="text-left"><strong>Jquery</strong></div>
                            <Progress value={80}>{80}%</Progress>
                            <div className="text-left"><strong>React</strong></div>
                            <Progress value={70}>{70}%</Progress>
                            <div className="text-left"><strong>Angular</strong></div>
                            <Progress value={30}>{30}%</Progress>
                            <div className="text-left"><strong>Next js</strong></div>
                            <Progress value={30}>{30}%</Progress>

                        </CardBody>
                    </Card>
                </Col>
                <Col md='4'>
                    <Card className='animate__animated animate__fadeInUp animate__delay-2s'>
                        <CardBody>
                            <CardTitle>Other Technologies</CardTitle>
                            <div className="text-left"><strong>Node js</strong></div>
                            <Progress value={20} animated >{20}%</Progress>
                            <div className="text-left"><strong>Express</strong></div>
                            <Progress value={20} animated >{20}%</Progress>
                            <div className="text-left"><strong>Mongo DB</strong></div>
                            <Progress value={10} animated >{10}%</Progress>
                            <div className="text-left"><strong>Git</strong></div>
                            <Progress value={20} animated >{20}%</Progress>

                        </CardBody>
                    </Card>
                </Col>
            </Row>           
        </div>
    )
}

export default Index
