import {useState, useEffect} from 'react'
function App() {
  const [pokemon, setPokemon] = useState([])

  const pokeFetch =  async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      const results = await response.json()
      setPokemon(results.results)
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
                { pokemon.map( result => <li>{result.name}</li>) }
              </ul>
            </div>
        </div>
    </div>
  );
}

export default App;
