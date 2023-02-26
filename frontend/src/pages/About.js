import React from 'react'
import { Box, Container, Heading, Text } from '@chakra-ui/react'
export default function About() {
    return (
        <Box style={{ minHeight:'100vh', background: '#293462' }}>
        <Container maxW={'container.xl'} px={'4'} py={'8'} height={'full'} pt={'10'} color={'white'}>
            <Heading as={'h3'} mb={'6'}>About Password Manager</Heading>

            <Text mb={'2'}>
                A password manager is a type of application that helps users to safely store and manage their passwords. In today's digital world, where we use multiple online accounts for different purposes, it can be difficult to remember all the passwords we create. Using the same password for multiple accounts is not secure and can lead to cyberattacks. This is where a password manager comes in handy.
            </Text>
            <Text mb={'2'}>
                Our password manager app provides a secure and convenient way for users to store and manage their passwords. With our app, users can create a master password that will be used to access all their saved passwords. The master password is encrypted and stored securely in the app, ensuring that only the user can access it.
            </Text>
            <Text mb={'2'}>
                Once the master password is set up, the user can start adding their passwords to the app. The app provides an easy-to-use interface where users can add, edit, and delete their passwords. The app also provides options for generating strong and unique passwords, making it easier for users to create secure passwords for their online accounts.
            </Text>
            <Text mb={'2'}>
                Our password manager app uses advanced encryption techniques to ensure that all saved passwords are secure and protected from unauthorized access. The app also has features to prevent phishing attacks, such as autofilling passwords only on the correct website.
            </Text>
            <Text mb={'2'}>
                Our app is available for both mobile and desktop platforms, and it can synchronize passwords across all devices. This means that users can access their saved passwords from any device, anytime, anywhere.
            </Text>
            <Text mb={'2'}>
                In summary, our password manager app is a secure and convenient solution for users who want to safely store and manage their passwords. With advanced encryption techniques, easy-to-use interface, and cross-device synchronization, our app provides users with the peace of mind they need to navigate the online world safely.
            </Text>
        </Container>
        </Box>
    )
}