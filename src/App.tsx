import { useState } from "react"
import type { DieType } from "./types/Die"
import { nanoid } from "nanoid"

import Header from "./components/Header"
import DiceSection from "./components/DiceSection"
import Btn from "./components/Btn"



function App() {
  const [dice, setDice] = useState<DieType[]>(() => generateNewDice())
  const container = `flex flex-col items-center min-h-screen`

  function generateNewDice():DieType[]{
    const diceArr = new Array(30).fill(0).map(() =>( {
      id : nanoid(), 
      isHeld: false, 
      value: Math.ceil(Math.random() * 6)
    }))
    return diceArr
  }

  return (
    <div className={container}>
      <Header />
      <main className="flex flex-col items-center">
        <DiceSection dice={dice} />
        <Btn>Start game</Btn>
      </main>
    </div>
  )
}

export default App
