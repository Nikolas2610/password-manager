import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { InputField } from "../../components/ui/InputField";
import { onChangeValue, _register } from "../../store/register/reducer/registerSlicer";
import ButtonForm, { BUTTON } from "../../components/ui/ButtonForm";

export default function Register() {
    const registerFormData = useSelector((state) => state.register);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(_register());
    }

    return (
        <div className="flex items-center justify-center h-screen bg-primary">
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative flex flex-col py-4 min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0  bg-secondary">
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div className="text-blueGray-400 text-center text-white text-3xl mb-3 font-bold">
                                    <small>Register</small>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <InputField
                                        title={"Username"}
                                        placeholder={"IronMan"}
                                        value={registerFormData.form.username}
                                        type={'text'}
                                        item={'username'}
                                        onChangeData={(payload) => dispatch(onChangeValue(payload))}
                                        errors={registerFormData.errors?.username}
                                    />
                                    <InputField
                                        title={"Email"}
                                        placeholder={"email@example.com"}
                                        value={registerFormData.form.email}
                                        type={'email'}
                                        item={'email'}
                                        onChangeData={(payload) => dispatch(onChangeValue(payload))}
                                        errors={registerFormData.errors?.email}
                                    />
                                    <InputField
                                        title={"Password"}
                                        placeholder={"******"}
                                        value={registerFormData.form.password}
                                        type={'password'}
                                        item={'password'}
                                        onChangeData={(payload) => dispatch(onChangeValue(payload))}
                                        errors={registerFormData.errors?.password}
                                    />
                                    <InputField
                                        title={"Confirm Password"}
                                        placeholder={"******"}
                                        value={registerFormData.form.password}
                                        type={'password'}
                                        item={'confirmPassword'}
                                        onChangeData={(payload) => dispatch(onChangeValue(payload))}
                                        errors={registerFormData.errors?.confirmPassword}
                                    />
                                    <div className="text-center mt-6">
                                        <ButtonForm
                                            title={'Register'}
                                            type={BUTTON.SUBMIT}
                                            loading={registerFormData.loading} />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-6 relative">
                            <div className="text-center">
                                <Link to="/auth/login" className="text-white">
                                    <small>Already have account?</small>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
