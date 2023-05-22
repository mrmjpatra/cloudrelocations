import React from 'react'
import styled from 'styled-components';
import TopHeader from './Header/TopHeader';
import MiddleHeader from './Header/MiddleHeader';
import MainHeader from './Header/MainHeader';


const Navbar: React.FC = () => {
    return (
        <NavbarContainer>
                <TopHeader/>
                <MiddleHeader/>
                <MainHeader/>
        </NavbarContainer>
    )
}
export default Navbar;

const NavbarContainer = styled.div`
   
`;
