// Write your Character component here
import React from "react";
import styled from 'styled-components';
import "../index.css"

const CharacterDiv = styled.div `
 display: flex;
flex-flow: row;
justify-content: space between;
color: #ccd6e0;
margin: 2%;

`



function Character(props){
    console.log(props);
    return(
        <CharacterDiv>
            
             <div className="cardWrap" style={{flex: 1, flexDirection: 'row'}}>
             
            <img id="charImage" src={props.image} alt={props.name}  />
             
            <p className="user"> {props.name}</p>

            <p className="comment">Species: {props.species}</p>
             <p className="comment"> Status: {props.status}</p>
    </div>
 
        
        </CharacterDiv>
    )
}

export default Character;