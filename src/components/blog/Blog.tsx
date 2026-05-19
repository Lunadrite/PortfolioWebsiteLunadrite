import type { ReactNode } from "react"

type ChildrenProps = {
  children: ReactNode
}

type ImageProps = {
  src: string
}


function Heading({ children }: ChildrenProps) {
    return(    
      <h2 className="text-4xl justify-center flex py-3">
        {children}
      </h2>
    )
}

function Text({ children }: ChildrenProps) {
    return(    
      <h2 className="flex text-amber-50">
        {children}
      </h2>
    )
}

function Image({ src }: ImageProps) {
    return(    
      <img src={src} className="w-70 rounded-3xl py-3"></img>
    )
}

export const Blog = {
  Heading,
  Text,
  Image,


}