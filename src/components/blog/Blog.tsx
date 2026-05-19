import type { ReactNode } from "react"

type ChildrenProps = {
  children: ReactNode
}

type ImageProps = {
  src: string
}

type ListProps = {
  items: string[]
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
      <p className="flex text-amber-50 pb-1">
        {children}
      </p>
    )
}

function ImportantInfo({ children }: ChildrenProps) {
    return(    
      <span className="border bg-red-950 text-red-400 rounded-2xl px-2 mx-1">
        {children}
      </span>
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

function List({ items }: ListProps) {
  return (
    <ul className="text-gray-300 pb-10">
      {items.map((item) => (
        <li className="pb-1" key={item}>{item}</li>
      ))}
    </ul>
  )
}

export const Blog = {
  Heading,
  Text,
  Image,
  SubHeading,
  ThumbnailImage,
  List,
  ImportantInfo,


}