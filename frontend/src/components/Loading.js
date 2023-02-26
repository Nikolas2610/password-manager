import { Flex } from '@chakra-ui/react'
import React from 'react'
import image from '../assets/gif/loading-gif.gif'

export default function Loading() {
    return (
        <Flex minH={'100vh'} justify={'center'} alignItems={'center'} bgColor={'cyan.700'}>
            <img src={image} alt="loading" />
        </Flex>
    )
}
