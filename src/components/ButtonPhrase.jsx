import React from "react"
import phrases from "../utils/phrases.json"
import randomIndex from "../services/randomIndex"
import bgArray from '../utils/bgArray.json'

const ButtonPhrase = ({ setQuote,setBgApp }) => {
  const bgIndex=randomIndex(bgArray)
  const sentence = randomIndex(phrases)
  const handleButton = () => {
    setQuote(sentence)
    setBgApp(bgIndex)
  };

  return (
    <button onClick={handleButton}>Probar mi suerte</button>
  )
}

export default ButtonPhrase
