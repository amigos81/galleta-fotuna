import { useState } from "react"
import "./App.css"
import RandomPhrase from "./components/RandomPhrase"
import randomIndex from "./services/randomIndex"

import phrases from "./utils/phrases.json"
import ButtonPhrase from "./components/ButtonPhrase"
import bgArray from './utils/bgArray.json'

function App() {
  const sentece = randomIndex(phrases)
  const bgIndex=randomIndex(bgArray)
  const [quote, setQuote] = useState(sentece)
  const [bgApp, setBgApp] = useState(bgIndex)

  const bgstyle={
    backgroundImage:`url('../fortuna-2/fondo${bgApp}.png')`
  }

  return (
    <div className="app" style={bgstyle}>
      <div className="container">
        <h1>Galletas de la Fotuna</h1>
        <ButtonPhrase
          setQuote={setQuote}
          setBgApp={setBgApp}
        />
        <RandomPhrase quote={quote} />
        
      </div>
    </div>
  );
}

export default App
