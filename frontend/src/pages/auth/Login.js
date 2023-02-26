import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { onChangeValue } from "../../store/login/reducer/loginSlice";
import InputField from "../../components/ui/InputField";
import ButtonForm, { BUTTON } from "../../components/ui/ButtonForm";
import { Alert, Box, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";

export default function Login({ onSubmit }) {
    const loginFormData = useSelector((state) => state.login)
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(loginFormData.form)
    }

    return (
        <div className="flex items-center justify-center h-screen bg-primary">
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative flex flex-col py-4 min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0  bg-secondary">
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div className="text-blueGray-400 text-center text-white text-3xl mb-3 font-bold">
                                    <small>Sign in</small>
                                </div>
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
                                    />
                                    <InputField
                                        title={"Password"}
                                        placeholder={"Your password"}
                                        value={loginFormData.form.password}
                                        type={'password'}
                                        item={'password'}
                                        onChangeData={(payload) => dispatch(onChangeValue(payload))}
                                        errors={loginFormData.errors?.password}
                                    />

                                    <Box marginTop={'6'}>
                                        <ButtonForm
                                            title={'SIGN IN'}
                                            type={BUTTON.SUBMIT}
                                            loading={loginFormData.loading}
                                        />
                                    </Box>
                                </form>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-6 relative">
                            <div className="w-1/2">
                                <a
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                    className="text-white"
                                >
                                    <small>Forgot password?</small>
                                </a>
                            </div>
                            <div className="w-1/2 text-right">
                                <Link to="/register" className="text-white">
                                    <small>Create new account</small>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
