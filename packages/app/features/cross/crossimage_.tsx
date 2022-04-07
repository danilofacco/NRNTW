import Image from "next/image"
import React from "react"
import { Image as NativeImage, Platform, View } from 'react-native';
interface Props {
    src: string,
    w: number,
    h: number,
    c: string,

}
const CrossImage: React.FC<Props> = ({ src, w, h, c }: Props) => {

    return (<>
        {Platform.OS === "web" ?
            <Image src={src} width={w} height={h} />
            :

            <NativeImage source={{ uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" }} style={{ width: w, height: h, resizeMode:"cover", }} width={w} height={h} />
           
               
               
            }  
    </>)

}
    
export default CrossImage