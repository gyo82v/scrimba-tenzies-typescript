import { useState } from "react"

import Header from "./components/Header"
import DiceSection from "./components/DiceSection"
import Btn from "./components/Btn"


function App() {
  const [dice, setDice] = useState([{id:1, value:4, isHeld:true}, {id:2, value:3, isHeld:false}])
  const container = `flex flex-col items-center min-h-screen`

  return (
    <div className={container}>
      <Header />
      <main>
        <DiceSection dice={dice} />
        <Btn>Start game</Btn>
      </main>
    </div>
  )
}

export default App
