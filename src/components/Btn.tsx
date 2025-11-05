import type {ButtonHTMLAttributes, ReactNode } from "react";
import {forwardRef} from "react"

type Props = {
    children : ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

 const Btn = forwardRef<HTMLButtonElement, Props>(
    ({children, ...rest}, ref) => {
         const style:string = `bg-gradient-to-br from-teal-700 to-lime-500 w-8/12
                               font-bold text-lg text-orange-300 px-4 py-2 
                               shadow-lg shadow-orange-700/30 rounded-lg
                               transition-transform transition-shadow transition-colors duration-300 ease-in-out 
                               hover:scale-105 hover:text-orange-400 hover:shadow-xl hover:from-lime-500 hover:to-teal-700
                               focus:scale-105 focus:text-orange-400 focus:shadow-xl focus:from-lime-500 focus:to-teal-700 
                               active:scale-95 focus:outline-none focus-visible:ring-lime-300 focus-visible:ring-2`
        return(
            <button className={style} ref={ref} {...rest}>{children}</button>
        )
    }
)

export default Btn

