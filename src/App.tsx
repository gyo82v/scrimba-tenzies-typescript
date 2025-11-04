import Header from "./components/Header"
import DiceSection from "./components/DiceSection"
import Btn from "./components/Btn"


function App() {
  const container = ``

  return (
    <div className={container}>
      <Header />
      <main>
        <DiceSection />
        <Btn>Start game</Btn>
      </main>
    </div>
  )
}

export default App
