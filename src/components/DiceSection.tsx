import type {JSX} from "react"
import type { DieType } from "../types/Die"
import Die from "./Die"

type Props = {
    dice: DieType[],
    hold: (id:string) => void,
    gameWon: boolean
}

export default function DiceSection({dice, hold, gameWon}:Props):JSX.Element{

    const diceElement = dice.map(d => (
        <Die data={d} key={d.id} onClick={() => hold(d.id)} disabled={gameWon} />
    ))
    return(
        <section className="grid grid-cols-5 grid-rows-6 gap-3 my-20 mt-20">
            {diceElement}
        </section>
    )
}