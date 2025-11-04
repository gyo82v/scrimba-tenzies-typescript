import type {JSX} from "react"
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = {
    children : ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Btn({children, ...rest}:Props):JSX.Element{
    const style = `bg-gradient-to-br from-teal-700 to-lime-500 
                   font-bold text-lg text-orange-300 px-4 py-2 
                   shadow-lg shadow-orange-700/30 rounded-lg
                   transition-transform transition-shadow transition-colors duration-300 ease-in-out 
                   hover:scale-105 active:scale-95 hover:shadow-xl hover:from-lime-500 hover:to-teal-700 
                   hover:text-orange-400`
    return(
        <button {...rest} className={style}>{children}</button>
    )
}