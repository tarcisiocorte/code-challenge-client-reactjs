import React from 'react'
import styled from "styled-components";
/** 
import {
  Container
} from styled.header;
**/

function Header({items}) {

  const Header = styled.header`text-align: center;`;
  return (
    <Header>
      <h1>Measure Data With Sensor</h1>
    </Header>
  );
}

export default Header;
