import type {JSX} from "react"

export default function Header():JSX.Element{
    const header = `bg-gradient-to-br from-teal-700 to-lime-500 w-full
                    flex flex-col items-center gap-4 px-4 py-6 
                    shadow-lg shadow-orange-700/30 border-b-2 border-orange-300`

    return(
        <header className={header}>
            <h1 className="text-2xl font-bold text-orange-300">Tenzies</h1>
            <p className="text-lg text-center text-orange-200">
                Roll until all dice are the same. Click each die to freeze
                it at its current value between rolls.
            </p>
        </header>
    )
}