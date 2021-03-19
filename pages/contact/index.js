import React from 'react'
import { Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import { faEnvelope, faPhone, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Index() {
    return (
        <div className='contact-form'>
            <div className='container'>
                <Row>
                    <Col md='4'>
                        <Card className='animate__animated animate__fadeInUp'>
                            <CardBody>
                                <CardTitle>Mobile Number</CardTitle>
                                <div className='d-flex'>
                                    <FontAwesomeIcon icon={faPhone} size="lg" />
                                    <div className='font-weight-bold ml-2'>+(91) 703-222-3342</div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md='4'>
                        <Card className='animate__animated animate__fadeInUp animate__delay-1s'>
                            <CardBody>
                                <CardTitle>Email Id</CardTitle>
                                <div className='d-flex'>
                                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                                    <div className='font-weight-bold ml-2'>anudeepalla4@gmail.com</div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md='4'>
                        <Card className='animate__animated animate__fadeInUp animate__delay-2s'>
                            <CardBody>
                                <CardTitle>Address</CardTitle>
                                <div className='d-flex'>
                                    <FontAwesomeIcon icon={faAddressBook} size="lg" />
                                    
                                    <address className='ml-2'>
                                        <strong>Example Inc.</strong><br />
                                                1234 Example Street<br />
                                                Antartica, Example 0987<br />
                                                (123) 456-7890
                                    </address>
                                    </div>
                                
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </div>
        </div>
    )
}

export default Index
