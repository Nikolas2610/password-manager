import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { userLogged } from '../store/user/actions/user.actions';
import { Box } from '@chakra-ui/react';
import NavBar from '../components/navbar/NavBar';
import Loading from '../components/Loading';

export default function RootLayout() {
    const loading = useSelector((state) => state.user.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(userLogged());
        }
    }, [dispatch])

    return (
        <>
            {loading
                ?
                <Loading />
                // <Flex minH={'100vh'} justify={'center'} alignItems={'center'} bgColor={'cyan.400'}>
                //     <img src={image} alt="loading" />
                // </Flex>
                :
                <Box position={'relative'}>
                    <NavBar />
                    <main>
                        <Outlet />
                    </main>
                </Box>
            }
        </>
    )
}