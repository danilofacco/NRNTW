import Image from "next/image"
import React from "react"
interface Props{
    src: string,
    w:number,
    h:number,
    c:string,

}
const  CrossImage : React.FC<Props> = ({src,w,h,c}:Props) => {
    
    return(<Image src={src} width={w} height={h}/>)

}

export default CrossImage