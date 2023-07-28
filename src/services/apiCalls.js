import axios from 'axios'


const pokemons = `https://pokeapi.co/api/v2/pokemon/`

export const bringPokemon = async () => {
    const {data} = await axios.get(`${pokemons}`)
    console.log('bringPokemon',data)
    return data
}

export const bringPokemonByName = async (name) => {

    const {data} = await axios.get(`${pokemons}${name}`)
    return data
}