import { Box, Container, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { userLogout } from '../../store/user/actions/user.actions'
import { selectUser } from '../../store/user/reducer/userSlice'
import NavItem from './NavItem'

export default function NavBar() {
    const [navItems] = useState([
        { id: 1, name: 'About', path: '/about', hideLogin: false, hideLogout: false },
        { id: 2, name: 'Dashboard', path: '/dashboard', hideLogin: false, hideLogout: true },
        { id: 3, name: 'Login', path: '/login', hideLogin: true, hideLogout: false },
    ])
    const location = useLocation();
    const isUserLogged = useSelector(selectUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(userLogout());
        navigate('/login')
    }

    return (
        <Box bgColor={'cyan.700'} position={'sticky'} top={'0'} width={'full'}>
            <Container maxW={'container.xl'} py={'2'} color={'white'}>
                <Flex justify={'space-between'}>
                    <NavItem to={'/'} activeItem={'/' === location.pathname}>Home</NavItem>

                    <Flex justify={'center'} gap={'8'}>
                        {navItems.map((item) => {
                            if (isUserLogged === item.hideLogout) {
                                return (
                                    <NavItem
                                        to={item.path}
                                        activeItem={item.path === location.pathname}
                                        key={item.id}
                                    >
                                        {item.name}
                                    </NavItem>
                                );
                            }
                            return null;
                        })}
                        {isUserLogged &&
                            <Box transition={'background-color 200ms linear'} rounded={'md'} cursor={'pointer'} px={'4'} py={'2'} _hover={{ backgroundColor: 'white', color: 'black' }} onClick={handleLogout}>
                                Logout
                            </Box>
                        }
                    </Flex>
                </Flex>
            </Container>
        </Box>
    )
}
