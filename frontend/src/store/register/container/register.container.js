import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Register from "../../../pages/auth/Register";
import { registerRules } from "../../../utils/validation/rules/registration";
import { validateObject } from "../../../utils/validation/validation";
import { registerAsync, setErrors, toggleSubmit } from "../actions/register.actions";


function RegisterContainer() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const toast = useToast();

    const handleRegister = (data) => {
        const rules = registerRules;
        const errors = validateObject(data, rules);
        
        dispatch(toggleSubmit(true));

        if (Object.keys(errors).length === 0) {
            dispatch(registerAsync(data))
                .then((data) => {
                    if (!data?.error) {
                        toast({
                            title: 'Account created',
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
    }

    return (
        <Register onSubmit={handleRegister} />
    )
}

export default RegisterContainer;