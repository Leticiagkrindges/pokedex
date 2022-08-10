import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import api from './service/api';


function createData(name, url) {
  return { name, url };
};


function App() {
  const [pokemon, setPokemon] = useState();
  const [pokemon1, setPokemon1] = useState();
  const [results] = useState([]);

  useEffect(()=>{
  api
    .get("https://pokeapi.co/api/v2/pokemon/")
    .then((response)=>{
      setPokemon(response.data.results);
      console.log(response.data.results);
      let temp_pokemons = [];
      response.data.results.forEach(pokemon => {
      temp_pokemons.push(createData(pokemon.name, pokemon.url))
      });
    setPokeball(temp_pokemons);
    console.log(Pokeball);
    })
  },[])

  useEffect(()=>{
    api
    .get("https://pokeapi.co/api/v2/pokemon/1/")
    .then((response)=>{
      setPokemon1(response.data);
      console.log(response.data);
    })
  },[])

  const[Pokeball, setPokeball] = useState([]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Pokedéx | Escolha seu jogador
        </p>  
        <p>
          {pokemon1.name}
          <br />
          altura: {pokemon1.height} 
          <br />

        </p>
          {Pokeball.map((pokemon, id)=>{
              return [
              <div key={id}>
                
                <h1> name: {pokemon.name}</h1>
                <h2>url: {pokemon.url} </h2>
              </div>
              ]
            })} 
      </header>
    </div>
  );
}

export default App;
