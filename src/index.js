import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const pokemonList = [
    {
        number: 1,
        name: "Bulbasaur",
        type: "Grass/Poison"
    },
    {
        number: 4,
        name: "Charmander",
        type: "Fire"
    },
    {
        number: 7,
        name: "Squirtle",
        type: "Water"
    }
];

const pokemonList2 = [
    {
        number: 152,
        name: "Chikorita",
        type: "Grass"
    },
    {
        number: 155,
        name: "Cyndiquil",
        type: "Fire"
    },
    {
        number: 158,
        name: "Totodile",
        type: "Water"
    }
]


function Kanto({pokemon}) {
    return (
        <div>
            <h1>Visit Professor Oak's Lab!</h1>
            <div>
                {pokemon.map(poke => (
                    <div>
                        <h2>{poke.name}</h2>
                        <p>{poke.type}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

function Jhoto({pokemon}) {
    return  (
        <div>
            <h1>Visit Professor Elm's Lab!</h1>
            <div>
                {pokemon.map(poke => (
                    <div>
                        <h2>{poke.name}</h2>
                        <p>{poke.type}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

function App(props) {
    return (
        <div>
            {(props.location === "Kanto") ? (<Kanto pokemon={pokemonList}/>) : (<Jhoto pokemon={pokemonList2}/>)}
        </div>
    )
}

ReactDOM.render(

    <App location="Jhoto"/>,

    document.getElementById('root')
);
