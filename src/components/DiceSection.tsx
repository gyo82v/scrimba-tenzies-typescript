import type {JSX} from "react"
import type { DieType } from "../types/Die"
import Die from "./Die"

type Props = {
    dice: DieType[]
}

export default function DiceSection({dice}:Props):JSX.Element{
    const section:string = ``
    const diceElement = dice.map(d => (
        <Die data={d} key={d.id} />
    ))
    return(
        <section className={section}>
            {diceElement}
        </section>
    )
}