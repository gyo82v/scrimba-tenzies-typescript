import type { DieType } from "../types/Die"
import type { JSX, ButtonHTMLAttributes} from "react";

type Props = { data: DieType} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Die({data, ...rest}:Props):JSX.Element{
    const style:string = `font-bold py-4 px-6 rounded-lg flex items-center justify-center 
                          bg-gradient-to-br  text-lg
                          shadow-lg shadow-orange-500/30 border border-orange-200`
    const effectStyle:string = `transition-transform transition-colors transition-shadow duration-300 ease-in-out 
                                hover:scale-105 active:scale-95 hover:shadow-xl hover:from-lime-200 hover:to-teal-400
                                focus-visible:scale-105 focus-visible:shadow-xl focus-visible:from-lime-200 focus-visible:to-teal-400 
                                focus:outline-none focus-visible:ring-lime-300 focus-visible:ring-2`
    const isHeldStyle:string = `${!data.isHeld ? `${effectStyle} from-teal-400 to-lime-200 text-lime-900` :
                                                "from-teal-700 to-lime-500 text-lime-300"}`
    const disabledStyle:string = `disabled:opacity-50 disabled:cursor-not-allowed`
    return(
        <button
          onMouseDown={e => e.preventDefault()}
          className={`${style} ${isHeldStyle} ${disabledStyle}`} 
          aria-pressed={data.isHeld}
          aria-label={`Die ${data.value} ${data.isHeld ? ", held" : ""}`}
          {...rest}
          >
            {data.value}
        </button>
    )

}