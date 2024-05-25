import "../components/Pokedex.css"
import { useEffect, useState } from "react"

export default function Pokedex() {
    const [id, setid] = useState(1);
    const [pokemon, setpokemon] = useState(null)

    const FetchData = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await response.json();
            setpokemon(data);

        } catch (error) {
            console.error('Erro: ', error)
        }
    }
    useEffect(() => {
        FetchData()
    }, [id]
        //useEffect acontece quando é feita a conexão com a API, retornanado os dados do pokemon a partir do ID
    )
    const nextPokemon = () => {
        setid(id + 1)

    }
    const previousPokemon = () => {
        setid(id - 1)
    }

    return (
        <div>
            {
                pokemon && (
                    <div className="pokemon">

                        <h1>Pokédex</h1>
                        <section className= "card"> 

                        
                        <p>{pokemon.name}</p>
                        <p>Peso:{pokemon.weight}g</p>
                        {pokemon.types.map((type, index) => (
                            <p key={index}>{type.type.name}</p>
                        ))}

                        <img src={pokemon.sprites.front_default} />
                        <button onClick={nextPokemon}>Próximo</button>
                        <button onClick={previousPokemon}>Anterior</button>
                        </section>
                    </div>
                )
            }

        </div>
    )
}
