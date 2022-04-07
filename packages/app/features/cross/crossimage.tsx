import Image from "next/image"
import React from "react"
import { Image as NativeImage, Platform, View } from 'react-native';
import tw from 'app/packages/twrnc'
interface Props {
    src?: any,
    alt:StaticRangeInit
    webSrc: string,
    w: number,
    h: number,
    c: string,
    ext?: boolean,
    url?: string

}
const CrossImage: React.FC<Props> = ({ src, webSrc, alt , url, w, h, c, ext = false }: Props) => {
    return (
        Platform.OS === "web" ?
            <img src={webSrc} className="w-full object-cover h-auto" width={w} height={h} alt={alt} />
            :
            <NativeImage
                style={tw`w-full`}
                width={w}
                height={h}
                //source={{ uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" }}
                source={ext ? {uri:url} : src} />
    )
}        

    
export default CrossImage