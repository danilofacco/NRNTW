import { Text, useSx, View, H1, P, Row, A } from 'dripsy'
import React from 'react'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import tw from 'app/packages/twrnc' 
import CrossImage from 'app/features/cross/crossimage' 
export function HomeScreen() {
  const Ibra = require("../../public/ibra.png")
  const sx = useSx()
  return (
    <View  
    style={tw`text-white flex flex-col pt-0 md:pt-20 h-full`} 
    > 
        <View  
    style={tw`bg-blue-200 object-cover text-white flex items-center max-w-20 pt-0 md:pt-20`} 
    > 
    <CrossImage alt="ibra" src={Ibra} webSrc="/ibra.png" w={300} h={300} c="w-full"/></View> 
 <CrossImage alt="ext" ext webSrc={"https://rockcontent.com/br/wp-content/uploads/sites/2/2020/02/teste-de-lideran%C3%A7a.png"} url={"https://rockcontent.com/br/wp-content/uploads/sites/2/2020/02/teste-de-lideran%C3%A7a.png"} w={300} h={300} c="w-full"/>  
      <H1 sx={{ fontWeight: '800' }}>Welcome to Solito.</H1>
      <View sx={{ maxWidth: 600 }}>
        <P sx={{ textAlign: 'center' }}>
          Here is a basic starter to show you how you can navigate from one
          screen to another. This screen uses the same code on Next.js and React
          Native.
        </P>
        <P sx={{ textAlign: 'center' }}>
          Solito is made by{' '}
          <A
            href="https://twitter.com/fernandotherojo"
            // @ts-expect-error react-native-web only types
            hrefAttrs={{
              target: '_blank',
              rel: 'noreferrer',
            }}
            sx={{ color: 'blue' }}
          >
            Fernando Rojo
          </A>
          .
        </P>
      </View>
      <View sx={{ height: 32 }} />
      <Row>
        <TextLink
          href="/user/fernando"
          textProps={{
            style: sx({ fontSize: 16, fontWeight: 'bold', color: 'blue' }),
          }}
        >
          Regular Link
        </TextLink>
        <View sx={{ width: 32 }} />
        <MotiLink
          href="/user/fernando"
          animate={({ hovered, pressed }) => {
            'worklet'

            return {
              scale: pressed ? 0.95 : hovered ? 1.1 : 1,
              rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
            }
          }}
          transition={{
            type: 'timing',
            duration: 150,
          }}
        >
          <Text
            selectable={false}
            sx={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}
          >
            Moti Link
          </Text>
        </MotiLink>
      </Row>
    </View>
  )
}
