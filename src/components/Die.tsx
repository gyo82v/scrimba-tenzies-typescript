import type {JSX} from "react"
import type { DieType } from "../types/Die"
import type { ButtonHTMLAttributes} from "react";

type Props = { data: DieType} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Die({data, ...rest}:Props):JSX.Element{
    const style:string = `font-bold p-4 rounded-lg flex items-center justify-center 
                          bg-gradient-to-br from-teal-400 to-lime-200 text-orange-600 
                          shadow-lg shadow-orange-500/30 border border-orange-200`
    const effectStyle:string = `transition-transform transition-colors transition-shadow duration-300 ease-in-out 
                         hover:scale-105 active:scale-95 hover:shadow-xl hover:text-orange-700 
                         hover:from-lime-200 hover:to-teal-400`
    const isHeldStyle:string = `${data.isHeld ? `${effectStyle} from-teal-400 to-lime-200 text-orange-600` :
                                                "from-teal-700 to-lime-500 text-orange-300"}`
    return(
        <button className={`${style} ${isHeldStyle}`} {...rest}>
            {data.value}
        </button>
    )

}