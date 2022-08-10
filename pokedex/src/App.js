import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import api from './service/api';
import axios from 'axios';


function createData(name, url) {
  return { name, url };
};

function createList(url){
  return{ url};
};


function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemon1, setPokemon1] = useState([]);
  const [results] = useState([]);
  const [pokeurl, setPokeurl] = useState();
  const [id, setId] = useState([]);


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
      let pokeurl = [];
      response.data.results.forEach(pokemon => {
        pokeurl.push(createList(pokemon.url))
      });
    setPokeball(temp_pokemons);
    setPokeurl(pokeurl);
    console.log(Pokeball);
    console.log(pokeurl);
    let id = Pokeball.document.getElementeById();
    setId(id);
    console.log(id);
    //console.log(Pokeball.length);  
    })
  },[]);

  // let id = Pokeball.document.getElementeById(id);
  // console.log(id);

  useEffect(()=>{
    api.get("https://pokeapi.co/api/v2/pokemon/1")
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
                <a>
                  <h1>name: {pokemon.name}</h1>
                  <h2>url: {pokemon.url} </h2>
                </a>
              </div>
              ]
            })} 
      </header>
    </div>
  );
}

export default App;
