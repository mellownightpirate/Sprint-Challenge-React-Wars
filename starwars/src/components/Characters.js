import React from 'react';
import styled from 'styled-components';

export default function Characters({props}) {
    
return (
    <Card>
    <Name>Name: {props.name}</Name>
    <Bio>Height: {props.height}</Bio>
    <Bio>Mass: {props.mass}</Bio>
    <Bio>Hair Color: {props.hair_color}</Bio>
    <Bio>Skin Color: {props.skin_color}</Bio>
    <Bio>Eye Color: {props.eye_color}</Bio>
    <Bio>Birth Year: {props.birth_year}</Bio>
    <Bio>Gender: {props.gender}</Bio>
    </Card>
)
};

const Name = styled.h2`
text-align: center;
font-family: 'Space Mono', monospace;
`;

const Bio = styled.h4`
`;

const Card = styled.div`
background: rgba(253, 227, 167, 0.3);
width: 15%;
margin: 10px;
padding: 1% 5%;
border-radius: 5px;
text-align: left;
font-family: 'Space Mono', monospace;
`;