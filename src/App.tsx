import { useState, useEffect, useRef } from "react"
import type { DieType } from "./types/Die"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

import Header from "./components/Header"
import DiceSection from "./components/DiceSection"
import Btn from "./components/Btn"


function App() {
  const [dice, setDice] = useState<DieType[]>(() => generateNewDice())
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const isGameWon:boolean = dice.every(d => d.isHeld) && dice.every(d => d.value === dice[0].value)

  useEffect(() => {
    if(isGameWon){
      buttonRef.current?.focus()
    }
  }, [isGameWon])

  function generateNewDice():DieType[]{
    const diceArr = new Array(30).fill(0).map(() =>( {
      id : nanoid(), 
      isHeld: false, 
      value: Math.ceil(Math.random() * 6)
    }))
    return diceArr
  }

  const rollDice = () => {
    if(!isGameWon){
      setDice(prev => prev.map(d => d.isHeld ? d : {...d, value : Math.ceil(Math.random() * 6)}))
    }else{
      setDice(generateNewDice)
    }
  }

  const holdId = (id:string) => {
    setDice(p => p.map(d => d.id === id ? {...d, isHeld : !d.isHeld} : d))
  }

  return (
    <div className="flex flex-col items-center min-h-screen">
      {isGameWon && <Confetti /> }
      <Header />
      <main className="flex flex-col items-center">
        <DiceSection dice={dice} hold={holdId} />
        <Btn onClick={rollDice} ref={buttonRef} onMouseDown={e => e.preventDefault()}>
          {isGameWon ? "New game" : "Roll"}
        </Btn>
      </main>
    </div>
  )
}

export default App
