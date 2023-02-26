import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { onChangeValue } from "../../store/login/reducer/loginSlice";
import InputField from "../../components/ui/InputField";
import ButtonForm, { BUTTON } from "../../components/ui/ButtonForm";
import { Box, Flex, Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";
import BoxForm from "../../components/wrappers/BoxForm";

export default function Login({ onSubmit }) {
    const loginFormData = useSelector((state) => state.login)
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(loginFormData.form)
    }

    return (
        <BoxForm title={'Sign In'}>
            <form onSubmit={handleSubmit}>
                {loginFormData.backendErrors &&
                    <Alert status='error' mb={'3'}>
                        <AlertIcon />
                        <AlertTitle>{loginFormData.backendErrors.error ? 'Form validation error!' : 'Network error'}</AlertTitle>
                        <AlertDescription>{loginFormData.backendErrors.error}</AlertDescription>
                    </Alert>
                }

                <InputField
                    title={"Email"}
                    placeholder={"email@example.com"}
                    value={loginFormData.form.email}
                    type={'text'}
                    item={'email'}
                    onChangeData={(payload) => dispatch(onChangeValue(payload))}
                    errors={loginFormData.errors?.email}
                    color={'white'}
                />
                <InputField
                    title={"Password"}
                    placeholder={"Your password"}
                    value={loginFormData.form.password}
                    type={'password'}
                    item={'password'}
                    onChangeData={(payload) => dispatch(onChangeValue(payload))}
                    errors={loginFormData.errors?.password}
                    color={'white'}
                />

                <Box marginTop={'6'} mt={'10'}>
                    <ButtonForm
                        title={'SIGN IN'}
                        type={BUTTON.SUBMIT}
                        loading={loginFormData.loading}
                    />
                </Box>
            </form>
            <Flex justify={'center'} mt={'6'} _hover={{ textDecoration: 'underline' }}>
                <Link to="/register">
                    Create new account
                </Link>
            </Flex>
        </BoxForm>
    );
}
