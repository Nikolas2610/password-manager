import { Box, Container, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

export default function BoxForm({ children, title }) {
    return (
        <Box style={{ height: '100vh', background: '#293462' }}>
            <Container maxW={'container.xl'} px={'4'} py={'8'} height={'full'} pt={'10'} color={'white'}>
                <Flex justifyContent={'center'} direction={'column'} alignItems={'center'} height={'full'}>
                    <Box bgColor={'cyan.700'} p={{base: '8',xl: '20' }} width={{ base: 'md', xl: 'container.md' }} rounded={'xl'}>
                        <Heading as={'h5'} textAlign={'center'} mb={'10'}>
                            {title}
                        </Heading>
                        {children}
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}
