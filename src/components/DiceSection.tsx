import type {JSX} from "react"
import type { DieType } from "../types/Die"
import Die from "./Die"

type Props = {
    dice: DieType[],
    hold: (id:string) => void
}

export default function DiceSection({dice, hold}:Props):JSX.Element{
    const section:string = `grid grid-cols-5 grid-rows-6 gap-3 
                            my-20 mt-20`
    const diceElement = dice.map(d => (
        <Die data={d} key={d.id} onClick={() => hold(d.id)} />
    ))
    return(
        <section className={section}>
            {diceElement}
        </section>
    )
}