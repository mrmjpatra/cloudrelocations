import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components';
import { navMenuList } from '../navmenulist';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { Add, Close, KeyboardArrowRight, MenuOpen, PlusOne, Remove } from '@mui/icons-material';

const MainHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredMenuId, setHoveredMenuId] = useState<number | null>(null);
  const [hoverSubMenuId, setHoverSubMenuId] = useState<number | null>(null);
  const [showSubSubMenu, setShowSubSubMenu] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const [plusClick, setplusClick] = useState(false);

  return (
    <MainHeaderContainer>
      <ThreeDotMenu>
        <IconButton size='large' style={{ color: 'white' }} onClick={() => setMenuOpen(prev => !prev)}>
          {menuOpen ? <Close /> : <MenuIcon />}
        </IconButton>
      </ThreeDotMenu>
      <NavMenu show={menuOpen} onMouseLeave={() => setHoveredMenuId(null)}>
        <MainMenuList>
          {
            navMenuList.map(menu =>
              <li key={menu.id} onMouseEnter={() => setHoveredMenuId(menu.id)}
              >
                <Link to={menu.link} onClick={() => setMenuOpen(false)} >{menu.name}</Link>
                <PlusMinuIcon>
                  {
                    menu.sub !== undefined ? <IconButton onClick={() => setplusClick(prev => !prev)} size='large' style={{ color: 'white' }} ><KeyboardArrowRight /> </IconButton> : null
                  }
                </PlusMinuIcon>
                <SubMenuList visible={hoveredMenuId === menu.id} onMouseLeave={() => setHoverSubMenuId(null)}>
                  {
                    menu.sub?.map(smenu =>
                      <SelectedSubList key={smenu.id} visible={showPopup}
                        onMouseEnter={() => setShowSubSubMenu(true)}
                        onMouseLeave={() => setShowSubSubMenu(false)}  >
                        <Link to={smenu.link} onClick={() => setMenuOpen(false)}>{smenu.sname}</Link>
                        {
                          smenu.ssmenu !== undefined ? <IconButton onClick={() => setplusClick(prev => !prev)} size='large' style={{ color: 'white' }} ><KeyboardArrowRight /> </IconButton> : null
                        }
                        <SubSubMenuList  >
                          {
                            smenu.ssmenu?.map(m =>
                              <SelectedSubSubList key={m.id} visible={showSubSubMenu} onClick={() => navigate(`${m.link}`)} >
                                <Link to={m.link} onClick={() => setMenuOpen(false)}>{m.ssname}</Link>
                              </SelectedSubSubList>)
                          }
                        </SubSubMenuList>
                      </SelectedSubList>
                    )
                  }
                </SubMenuList>
              </li>
            )
          }
        </MainMenuList>
      </NavMenu>
    </MainHeaderContainer>
  )
}

export default MainHeader;
const MainHeaderContainer = styled.div`
  background-color: #F05A29;
  position: relative;
`;
const NavMenu = styled.div<{ show: boolean }>`
  @media screen and (max-width: 820px) {
    width: 100%;
    position: absolute;
    align-items: start;
    top: 100%;
    z-index: 10;
    display: ${props => props.show ? 'block' : 'none'};
  } 
`;
const ThreeDotMenu = styled.div`
  display: none;
  @media screen and (max-width: 820px) {
    display: flex;
    justify-content: end;
    align-items: center;
  }  
`;
const PlusMinuIcon = styled.div`
  display: none;
  @media screen and (max-width: 820px) {
    display: flex;

  }  
`
const SubSubMenuList = styled.ul`
  display: none;
  flex-direction: column;
  position: absolute;
  left: 100%;
  top: 0;
  transition: all 500ms ease;
  background-color:  rgb(250, 66, 22);  
  @media screen and (max-width: 820px) {

  }
`;
const SelectedSubSubList = styled.li<{ visible: boolean }>`
  ${({ visible }) => visible && `display: flex;`}
  transition: all 0.4s ease-in-out;
  transform: translateY(-30px);   
  opacity: 0;  
  width:12rem;
  transition:all 1s ease-out;
  ${({ visible }) => visible && `
    display: flex;
    transform: translateY(0);
    opacity: 1;
  `}
  a{
    color:white !important;
    transition:color 400ms ease;
    
  }
  &:hover{
     a{
      color:black !important;
     }
    }
`;
const SubMenuList = styled.ul<{ visible: boolean }>`
  display: none;
  flex-direction: column;
  position: absolute;
  top: 1.2rem;
  left: -7px;
  z-index: 10;
  background-color: rgb(250, 66, 22);
  margin-top: 0.5rem;
  width: 14rem;
  li {
    padding: 0.7rem 0.5rem;
    a {
      font-size: 1rem !important;
      transition: color ease 400ms;
      cursor: pointer;
    }
    &:hover {
      background-color: #ffe100;
    }
  }
  transition: all 0.7s ease-in-out;
  transform: translateY(-30px);   
  opacity: 0;  
  ${({ visible }) => visible && `
    display: flex;
    transform: translateY(0);
    opacity: 1;
  `}
  &:hover {
      ${SelectedSubSubList} {
        display: flex;
      }
    }
  @media screen and (max-width: 820px) {
    left:10rem;
    top: -1.8rem;
  }
`;
const MainMenuList = styled.ul`
  position: relative;
    display: flex;
    gap: 2rem;
    margin: 0 4rem;
    align-items: center;
  li {
    list-style: none;
    margin-top: 0.6rem;
    position: relative;
    margin-bottom: .4rem;
    a{
      color: white;
      font-size: 1.2rem;     
    }
    &:hover {
      ${SubMenuList} {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 100%;
    margin: 0;
    background-color: rgb(250, 66, 22);
    padding: 2rem;
    align-items: flex-start;
   li{
    display: flex;
    align-items: center;
    gap: .5rem;
   }
  }
`;



const SelectedSubList = styled.li<{ visible: boolean }>`
position: relative;
a{
  color: white;
}
:hover {
    ${SubMenuList} {
      display: flex;
    }
    ${SubSubMenuList} {
      display: flex;
    }
    cursor: pointer;
    a{
      color: black;
    }
  }
  
`;
