import React from 'react'
import { Container,Row, Col } from "react-bootstrap";
import { bringPokemon, bringPokemonByName } from './../../services/apiCalls.js'
import { useState, useEffect } from 'react';
import { PokeCard } from './../../common/card/PokeCard.jsx';
import { PokeSearch } from '../../common/pokeSearch/PokeSearch.jsx';


export const Home = () => {

  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [input, setInput] = useState("");

  const changeValue = (name) => {
    setInput(name);
  };

  useEffect(() => {
    if(input==""){
      bringPokemon()
      .then((res) => {
        setPokemons(res.results);
      })
      .catch((error) => {
        console.log("Error bringPokemon: ", error);
      })
    }else{
      console.log('')
      bringPokemonByName(input)
        .then((res) => {
          setPokemon(res);
        })
        .catch((error) => {
          console.log("Error bringPokemonByName: ", error);
        })
    }
    
    
  }, [input]);


  return (
    <>
      <Container>
        <Row>
          <PokeSearch changeValue={(e) => changeValue(e)}/>
        </Row>
        <Row>
          
            {input=="" &&
              pokemons.map((card, i) => {
                
                bringPokemonByName(card.name)
                .then((res) => {
                  setPokemon(res);
                })
                .catch((error) => {
                  console.log("Error bringPokemonByName: ", error);
                })


                return (
                  <Col key={i} className='bg-info'>
                    <PokeCard 
                    name={card.name} 
                    id={card.id                    } 
                    weight={card.weight} />
                  </Col>
                );
              })
            }

            {input!="" &&
              pokemons.map((card, i) => {
                return (
                  <Col key={i} className='bg-info'>
                    <PokeCard name={pokemon.name} id={pokemon.id} weight={pokemon.weight} />
                  </Col>
                );
              })
            }
            
              
              
              

        </Row>
      </Container>
    </>
  )
}
