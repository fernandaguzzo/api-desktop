import React from 'react';
import { shell } from 'electron';
import { Card, Global, Button } from './styles';

const PersonCard = ({ data }) => {

    return (
        <Global>
        <Card>
            <p>Name: {data.name} </p>
            <p>Gender: {data.gender}</p>
            <p>Height: {data.height}</p>
            <p>Species: {data.species}</p>
            <p>Birth: {data.born}</p>
            <p>Homeworld: {data.homeworld}</p>
            <p>Death: {data.died}</p>
            <p>Place of death: {data.diedLocation}</p>
            <p>Mass: {data.mass}</p>
            <Button onClick={() => {
                shell.openExternal(data.wiki)

            }}>Wiki</Button>
           
        </Card>
        </Global>
        



    );
}

export default PersonCard;