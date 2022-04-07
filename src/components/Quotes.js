import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react'
import './Quotes.css';

const Quotes = () => {
    const [quote, setQuote] = useState()
    const [character, setCharacter] = useState();

    useEffect(() => {
        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer BfMQ3HhYOrlhdvasiw-T'
            }
    
        const fetchData = async () => {
          const quotesListAll = await fetch('https://the-one-api.dev/v2/quote', {
            headers: headers
          })
          const quotes = await quotesListAll.json();
          const quote = quotes.docs[Math.floor(Math.random() * quotes?.docs?.length)];
          setQuote(quote.dialog)
          const allCharacters = await fetch('https://the-one-api.dev/v2/character?_id=' + quote.character, { headers: headers })
          const characters = await allCharacters.json();
          const character = characters.docs[0];
          setCharacter(character.name)
        };
    
        fetchData();
      }, []);

    const fetchData = async () => {
      
      const headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer BfMQ3HhYOrlhdvasiw-T'
        }

      const quotesListAll = await fetch('https://the-one-api.dev/v2/quote', {
        headers: headers
      })
      const quotes = await quotesListAll.json();
      const quote = quotes.docs[Math.floor(Math.random() * quotes?.docs?.length)];
      setQuote(quote.dialog)
      const allCharacters = await fetch('https://the-one-api.dev/v2/character?_id=' + quote.character, { headers: headers })
      const characters = await allCharacters.json();
      const character = characters.docs[0];
      setCharacter(character.name)
    };

  return (
    <>
  <Button onClick={fetchData} variant="contained" color="success">
    Another
    </Button>
    <div className='wrapper'>
  
    <blockquote>{quote}</blockquote>
<cite>{character} </cite>
    
    </div>
    </>
  )
}

export default Quotes

