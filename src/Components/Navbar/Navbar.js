
import { Link } from "react-router-dom";
import React from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div`

`
const NavbarUL = styled.ul`
display:flex;
list-style:none;
`
const NavbarLI = styled.li`
margin:10px;

a{
    text-decoration: none;
}

`

const Navbar = () => {
    return (
        <StyledDiv>
            <NavbarUL>
                <NavbarLI>
                    <Link to='/'>Home</Link>
                </NavbarLI>
                <NavbarLI>
                    <Link to='/about'>About</Link>
                </NavbarLI>
                <NavbarLI>
                    <Link to='/woman'>Woman</Link>
                </NavbarLI>
                <NavbarLI>
                    <Link to='/man'>Man</Link>
                </NavbarLI>

                <NavbarLI>
                    <Link to='/service'>Service</Link>
                </NavbarLI>
            </NavbarUL>
        </StyledDiv>
    )
}

export default Navbar;