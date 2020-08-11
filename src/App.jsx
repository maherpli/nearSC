import React from "react"
import "./App.scss"
import Provider from './provider'
import Container from './components/Container'

function App() {
  return (
     <Provider>
        <Container />
     </Provider>
  )
}

export default App
