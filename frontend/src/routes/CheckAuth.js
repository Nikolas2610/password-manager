import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { setToken, userLogged } from '../store/user/actions/user.actions';

const CheckAuth = () => {
    useAuth();
    return <Outlet />
}

const useAuth = () => {
    const token = localStorage.getItem('token');
    const dispatch = useDispatch();
    if (token) {
        dispatch(setToken(token));
        return dispatch(userLogged());
    }
    return false
} 

export default CheckAuth;
