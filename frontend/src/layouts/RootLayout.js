import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { userLogged, userLogout } from '../store/user/actions/user.actions';
import { selectUser } from '../store/user/reducer/userSlice';
import { Container, Flex } from '@chakra-ui/react';
import image from '../assets/gif/loading-gif.gif'

export default function RootLayout() {
    const isUserLogged = useSelector(selectUser);
    const loading = useSelector((state) => state.user.loading);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(userLogout());
        navigate('/login')
    }

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
                <Flex minH={'100vh'} justify={'center'} alignItems={'center'} bgColor={'cyan.400'}>
                    <img src={image} alt="loading" />
                </Flex>
                :
                <div>
                    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-sky-500">
                        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                                <NavLink to="/" className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">Home</NavLink>
                                <button
                                    className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                                    type="button"
                                >
                                    <i className="fas fa-bars"></i>
                                </button>
                            </div>
                            <div
                                className={
                                    "lg:flex flex-grow items-center"
                                }
                                id="example-navbar-danger"
                            >
                                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                                    <NavLink to="/about" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">About</NavLink>
                                    {!isUserLogged
                                        ?
                                        <NavLink to="/login" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">Login</NavLink>
                                        :
                                        <>
                                            <NavLink to="/dashboard" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">Dashboard</NavLink>
                                            <button className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                                onClick={handleLogout}>Logout</button>
                                        </>
                                    }
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <main>
                        <Container maxW={'container.xl'} px={'4'} py={'8'}>
                            <Outlet />
                        </Container>
                    </main>
                </div>
            }
        </>
    )
}