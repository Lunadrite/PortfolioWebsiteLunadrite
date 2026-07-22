import type { ReactNode } from "react"


type ChildrenProps = {
  children: ReactNode
}


function Heading({ children }: ChildrenProps) {
    return(    
      <h1 className="text-2xl justify-center flex py-3">
        {children}
      </h1>
    )
}
function SubHeading({ children }: ChildrenProps) {
    return(    
      <h1 className="text-1xl justify-center flex py-3">
        {children}
      </h1>
    )
}
function Text({ children }: ChildrenProps) {
    return(    
      <h1 className="text-lg justify-center flex py-3">
        {children}
      </h1>
    )
}




export const Home = {
    Heading,
    SubHeading,
    Text,

}