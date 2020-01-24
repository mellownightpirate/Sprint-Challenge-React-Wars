import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Characters from './components/Characters';
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
 const [characters, setCharacters] = useState ( [] );  
 
 // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
    .then(res => {
      setCharacters(res.data.results)
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header className="Header">REACT WARS</Header>
      <StyledContainer>
        {characters.map((characters, index) => <Characters props={characters} key={index} />)}
      </StyledContainer>
    </div>
  );
}

export default App;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Header = styled.h1`
text-align: center;
color: black;
font-family: 'Space Mono', monospace;;
`;
