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


function Kanto() {
    return (
        <div>
            Welcome to the Kanto region!
        </div>
    )
}

function Jhoto() {
    return  (
        <>
            Welcome to the Jhoto region!
        </>
    )
}

function App() {
    return (
        <div>
            <Kanto/>
            <Jhoto/>
        </div>
    )
}

ReactDOM.render(

    <App/>,

    document.getElementById('root')
);




    const [first, second, third] = ["popcoorn", "pretzels", "pineapple"];

console.log(first);
console.log(second);
console.log(third);