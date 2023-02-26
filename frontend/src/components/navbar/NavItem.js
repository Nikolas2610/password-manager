import { Box } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavItem({ children, to, activeItem }) {
    return (
        <NavLink to={to}>
            <Box transition={'background-color 200ms linear'} rounded={'md'} cursor={'pointer'} px={'4'} py={'2'} _hover={{ backgroundColor: 'white', color: 'black' }} bgColor={activeItem ? 'white' : ''} color={activeItem ? 'black' : ''}>
                {children}
            </Box>
        </NavLink>
    )
}
