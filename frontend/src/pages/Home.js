import { Flex, Heading } from "@chakra-ui/react";

export default function Home() {
    return (
        <>
            <Flex justify={'center'} mb={'6'}>
                <Heading as={'h2'}>Password Manager</Heading>
            </Flex>
            <Flex justify={'center'}>
                <Heading as={'h6'}>Secure Your Passwords with Ease</Heading>
            </Flex>
        </>
    )
}