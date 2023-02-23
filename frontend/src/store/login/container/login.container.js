import { useDispatch } from 'react-redux';
import Login from '../../../pages/auth/Login';
import { loginRules } from '../../../utils/validation/rules/login';
import { validateObject } from '../../../utils/validation/validation';
import { loginAsync, setErrors, toggleSubmit } from '../actions/login.actions';
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'

function LoginContainer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast()

  const handleLogin = (data) => {
    const rules = loginRules;
    const errors = validateObject(data, rules);
    dispatch(toggleSubmit(true));
    if (Object.keys(errors).length === 0) {
      dispatch(loginAsync(data))
        .then((data) => {
          if (!data?.error) {
            toast({
              title: 'Account login',
              status: 'success',
              duration: 7000,
              isClosable: true,
              position: 'top-right',
            })
            navigate('/dashboard');
          }
        });
    } else {
      dispatch(setErrors(errors));
    }
  };

  return (
    <Login onSubmit={handleLogin} />
  );
}

export default LoginContainer;