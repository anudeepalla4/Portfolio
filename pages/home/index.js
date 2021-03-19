import React, { useRef, useEffect, useState } from 'react'
import { Row, Col, Card, CardBody, Button } from 'reactstrap';
import Link from 'next/link';
import anime from 'animejs';

function Index() {
    const animationRef = useRef(null);

    useEffect(() => {
        const textWrapper = document.querySelector('.ml6 .letters');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        animationRef.current = anime.timeline({ loop: true }).add({
            targets: '.ml6 .letter',
            translateY: ["1.1em", 0],
            translateZ: 0,
            duration: 750,
            delay: (el, i) => 50 * i
        }).add({
            targets: '.ml6',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        })
    }, [])

    return (
        <div className='container-fluid'>
            <Row>
                <Col md='12' className='p-5'>
                    <h6>Hello, My name is </h6>
                    <h1>Anudeep Alla</h1>
                    <h6>And Iam a User Interface developer</h6>
                    <Button color='primary'><a className='text-white' href="../assets/sample.pdf" target="_blank" download>Download Resume</a></Button>
                </Col>
                <Col md='12'>
                    <div id='home' className="boxes black">
                        <h1 className="ml6">
                            <span className="text-wrapper">
                                <span className="letters">Iam Anudeep UI Developer</span>
                            </span>
                        </h1>
                    </div>
                </Col>
            </Row>
        </div>

    )
}

export default Index
