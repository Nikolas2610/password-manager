import { Flex, Heading, Container } from "@chakra-ui/react";

export default function Home() {
    return (
        <div className='hero'>
            <Container maxW={'container.xl'} px={'4'} py={'8'} height={'full'}>
                <Flex justifyContent={'center'} direction={'column'} alignItems={'center'} height={'full'}>
                    <Flex justify={'center'} mb={'6'} color={'white'}>
                        <Heading as={'h2'}>Password Manager</Heading>
                    </Flex>
                    <Flex justify={'center'} color={'white'}>
                        <Heading as={'h6'}>Secure Your Passwords with Ease</Heading>
                    </Flex>
                </Flex>
            </Container>
        </div>
    )
}