import type { ReactNode } from "react"

type ChildrenProps = {
  children: ReactNode
}

type ImageProps = {
  src: string
}


function Heading({ children }: ChildrenProps) {
    return(    
      <h1 className="text-4xl justify-center flex py-3">
        {children}
      </h1>
    )
}

function SubHeading({ children }: ChildrenProps) {
    return(    
      <h2 className="text-2xl flex pb-2">
        {children}
      </h2>
    )
}

function Text({ children }: ChildrenProps) {
    return(    
      <p className="flex text-amber-50">
        {children}
      </p>
    )
}

function Image({ src }: ImageProps) {
    return(    
      <img src={src} className="w-70 rounded-3xl py-3"></img>
    )
}
function ThumbnailImage({ src }: ImageProps) {
    return(    
      <div className="justify-center flex">
      <img src={src}  className="flex justify-center w-full  max-w-md md:min-w-2xl xl:min-w-3xl 2xl:min-w-3xl p-4 rounded-md object-cover "></img>
    </div>
    )
}

export const Blog = {
  Heading,
  Text,
  Image,
  SubHeading,
  ThumbnailImage,


}