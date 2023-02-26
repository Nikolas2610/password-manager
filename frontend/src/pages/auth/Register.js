import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import InputField, { INPUT } from "../../components/ui/InputField";
import { onChangeValue } from "../../store/register/reducer/registerSlicer";
import ButtonForm, { BUTTON } from "../../components/ui/ButtonForm";
import { Alert, Box, AlertIcon, AlertTitle, AlertDescription, Flex } from "@chakra-ui/react";
import BoxForm from "../../components/wrappers/BoxForm";

export default function Register({ onSubmit }) {
    const registerFormData = useSelector((state) => state.register);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(registerFormData.form);
    }

    return (
        <BoxForm title={'Register'}>
            <form onSubmit={handleSubmit}>
                {registerFormData.backendErrors &&
                    <Alert status='error' mb={'3'}>
                        <AlertIcon />
                        <AlertTitle>Form validation error!</AlertTitle>
                        <AlertDescription>{registerFormData.backendErrors.error}</AlertDescription>
                    </Alert>
                }
                <InputField
                    title={"Name"}
                    placeholder={"IronMan"}
                    value={registerFormData.form.name}
                    type={INPUT.TEXT}
                    item={'name'}
                    onChangeData={(payload) => dispatch(onChangeValue(payload))}
                    errors={registerFormData.errors?.name}
                    color={'white'}
                />

                <InputField
                    title={"Email"}
                    placeholder={"email@example.com"}
                    value={registerFormData.form.email}
                    type={INPUT.EMAIL}
                    item={'email'}
                    onChangeData={(payload) => dispatch(onChangeValue(payload))}
                    errors={registerFormData.errors?.email}
                    color={'white'}
                />

                <InputField
                    title={"Password"}
                    placeholder={"******"}
                    value={registerFormData.form.password}
                    type={INPUT.PASSWORD}
                    item={'password'}
                    onChangeData={(payload) => dispatch(onChangeValue(payload))}
                    errors={registerFormData.errors?.password}
                    color={'white'}
                />

                <InputField
                    title={"Confirm Password"}
                    placeholder={"******"}
                    value={registerFormData.form.password}
                    type={INPUT.PASSWORD}
                    item={'password_confirmation'}
                    onChangeData={(payload) => dispatch(onChangeValue(payload))}
                    errors={registerFormData.errors?.password_confirmation}
                    color={'white'}
                />

                <Box marginTop={'6'}>
                    <ButtonForm
                        title={'Register'}
                        type={BUTTON.SUBMIT}
                        loading={registerFormData.loading} />
                </Box>
            </form>
            <Flex justify={'center'} mt={'6'} _hover={{ textDecoration: 'underline' }}>
                <Link to="/login">
                    Already have account?
                </Link>
            </Flex>
        </BoxForm>
        // <div className="flex items-center justify-center h-screen bg-primary">
        //     <div className="container mx-auto px-4 h-full">
        //         <div className="flex content-center items-center justify-center h-full">
        //             <div className="w-full lg:w-6/12 px-4">
        //                 <div className="relative flex flex-col py-4 min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0  bg-secondary">
        //                     <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        //                         <div className="text-blueGray-400 text-center text-white text-3xl mb-3 font-bold">
        //                             <small>Register</small>
        //                         </div>

        //                     </div>
        //                 </div>
        //                 <div className="flex flex-wrap mt-6 relative">
        //                     <div className="text-center">
        //                         <Link to="/login" className="text-white">
        //                             <small>Already have account?</small>
        //                         </Link>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}
