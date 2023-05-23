import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { topHeaderList } from './topheaderlist';
import { Link } from 'react-router-dom';

const TopHeader = () => {
  return (
    <HeaderContainer>
      {
        topHeaderList.map(list =>
          <ListContainer key={list.id}>
            <FontAwesomeIcon icon={list.icon} />
            <Link to={list.link}>{list.title}</Link>
            &nbsp;
            |
          </ListContainer>)
      }
    </HeaderContainer>
  )
}

export default TopHeader;
const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(255 118 73);
  padding: 1rem 0;
  justify-content: center;
  gap: 0.8rem;
`;
const ListContainer = styled.div`
  display: flex;
  align-items: center;
  gap: .3rem;
  cursor: pointer;
  svg{
    color: #105e74;
  }
  a{
    color: black;
  }
  :hover{
    a{
    color: white;
    }
  }

`;