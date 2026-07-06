import type { ReactNode } from "react"



type ChildrenProps = {
  children: ReactNode
}

type PictureProps = {
    children?: ReactNode
    src: string
    width?: string
    caption?: string

}

function Picture({ src, children}: PictureProps) {
    return(
    <div className="flex gap-4 flex-col items-start">
        <div className="w-[300px]">
            <img src={src} className="border-1 p-4 rounded-lg"></img>
        </div>
        <div className="pictureComment max-w-[300px] break-words">{children}</div>
    </div>
    )
}


export const Gallery = {
    Picture,
}