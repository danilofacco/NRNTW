import { Text, useSx, View, H1, P, Row, A } from 'dripsy'
import React from 'react'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import tw from '../../../../node_modules/twrnc'
import {FiveHundredPx} from '../../../../node_modules/@styled-icons/boxicons-logos/FiveHundredPx'
import CrossImage from 'app/features/cross/crossimage'

export function HomeScreen() {
  const sx = useSx()
  return (
    <View  
    style={tw`bg-blue-200 text-white flex flex-col gap-4 pt-20 h-full`} 
    >  
 <CrossImage src="/vercel.svg" w={200} h={300} c="w-full"/> 
      
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
