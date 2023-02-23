import React from 'react'
import { Flex } from '@chakra-ui/react'
export default function About() {
    return (
        <div className="about">
            <h2>About Us</h2>
            <Flex justify={{ base: 'start', md: 'center' }} color='black' bgColor={'green.500'}>Hello</Flex>
        </div>
    )
}