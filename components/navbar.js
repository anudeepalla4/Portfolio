import React, { useState, useEffect } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import Link from 'next/link';

const links = [
    { href: 'home', text: 'Home', id: "navItem_1", className:"headerNavBtns" },
    { href: 'about', text: 'About', id: "navItem_2",className:"headerNavBtns" },
    { href: 'technologies', text: 'Technologies', id: "navItem_3", className:"headerNavBtns" },
    { href: 'projects', text: 'Projects', id: "navItem_4", className:"headerNavBtns" },
    { href: 'contact', text: 'Contact', id: "navItem_5", className:"headerNavBtns" },
];

const createNavItem = ({ href, text, className, id }) => (
    <NavItem id={id} className={className}>
        <NavLink ><Link href={href}><a>{text}</a></Link></NavLink>
    </NavItem>
);


const Example = () => {
    const [state, setState] = useState({
        isOpen: false
    });

    const toggle = () => {
        setState({
            isOpen: !state.isOpen
        });
    }

    useEffect(() => {         
        //document.getElementById("navItem_1").classList.add("activeBtn");        
             
        const btns = document.getElementsByClassName('headerNavBtns');       
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', buttonClicked)
        }
    }, [])

    function buttonClicked() {
        const btns = document.getElementsByClassName('headerNavBtns');
        for (var i = 0; i < btns.length; i++) {
            btns[i].classList.remove("activeBtn")
        }
        this.classList.add('activeBtn');
    }

    return (
        <div className="header">
            <Navbar color="light" light expand="md">
                <NavbarBrand><strong>Portfolio</strong></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {links.map(createNavItem)}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Example
