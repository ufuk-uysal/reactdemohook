import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);



    return (
        <div>
            <Navbar color="dark" className="navbar-dark navbar-expand-sm" toggleable>
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/hakkimizda">Hakkımızda</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/uyeler">Üyeler</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/KitapPage">Kitap Listesi</NavLink>
                        </NavItem>
                     
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}
