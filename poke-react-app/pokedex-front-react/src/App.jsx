import React from 'react'
import { PokemonRoute } from './app/routes/PokemonRoute';


function App() {
  return (
    <div className="App">
      {/* <AuthProvider> */}
      <PokemonRoute />
      {/* </AuthProvider> */}
    </div>
  )
}

export default App
