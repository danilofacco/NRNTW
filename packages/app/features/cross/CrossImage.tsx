import Image from "next/image"
import React from "react"
import { Image as NativeImage, Platform } from 'react-native';
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
            <NativeImage source={{ uri:src}}  width={w} height={h} />
}
    </>)

}

export default CrossImage