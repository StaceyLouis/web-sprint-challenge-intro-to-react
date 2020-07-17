import React from 'react';
import Character from './Character';
import styled from 'styled-components';
import "../index.css"

const ParentDiv = styled.div`
 
 display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  ;
`


function CharContainer(props) {

    const { data } = props;
    console.log(data)
    return (
        <ParentDiv>
      
        {data.map((i) => {
      
        return   <Character key={i.id} name={i.name} status={i.status} species={i.species} image={i.image} />;
      })};


        
        </ParentDiv>
    )
}

export default CharContainer;