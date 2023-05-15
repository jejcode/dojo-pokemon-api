import {useState, useEffect} from 'react'
import axios from 'axios'
function App() {
  const [pokemon, setPokemon] = useState([])

  const pokeFetch =  async () => {
    try {
      // Fetch from original assignment is commented out
      // const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      // const results = await response.json()
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      const results = response.data.results
      // setPokemon(results.results)
      setPokemon(results)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    pokeFetch()
  }, [])
  return (
    <div className="container m-4">
        <div className="row justify-content-center">
            <div id="root" className="col-auto">
              <ul>
                { pokemon.map( (result, index) => <li key={index}>{result.name}</li>) }
              </ul>
            </div>
        </div>
    </div>
  );
}

export default App;
