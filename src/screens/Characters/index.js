import React, {useCallback, useState, useEffect} from 'react';
import PersonCard from '../../components/PersonCard';
import api from '../../services/api';
import { Title } from './styles';


const Characters = () => {
    const [list, setList] = useState([]);

    const loadingCharacters = useCallback(async () => {
        try {
          const response =  await api.get('/all.json');
          if (response.data) setList(response.data);
        } catch (error) {
            console.log('Ocorreu uma falha na comunicação com a API.');
        }
    }, []);

    useEffect(() => {
      loadingCharacters();
    }, [loadingCharacters]);


    return (
        <>
        
        <Title>Data about Star Wars characters</Title>
        <ul>
            {list.map( c => {
                return (
                    <div>
                        <PersonCard key={c.name} data={c}/>
                     
                    </div>
                )
            })}

        </ul>
        </>
    );
}

export default Characters;