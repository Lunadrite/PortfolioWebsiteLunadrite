import type { ReactNode } from "react"


type ChildrenProps = {
  children: ReactNode
}


function Heading({ children }: ChildrenProps) {
    return(    
      <h1 className="text-4xl justify-center flex py-3">
        {children}
      </h1>
    )
}




export const Home = {
    Heading,


}