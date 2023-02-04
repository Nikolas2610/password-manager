import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { onChangeValue } from "../../store/login/reducer/loginSlice";
import InputField from "../../components/ui/InputField";
import ButtonForm from "../../components/ui/ButtonForm";

export default function Login() {
    const loginFormData = useSelector((state) => state.login)
    const dispatch = useDispatch();

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
                                <form>
                                    <InputField
                                        title={"Email"}
                                        placeholder={"email@example.com"}
                                        value={loginFormData.email}
                                        type={'email'}
                                        item={'email'}
                                        onChangeData={(payload) => dispatch(onChangeValue(payload))} />
                                    <InputField
                                        title={"Password"}
                                        placeholder={"Your password"}
                                        value={loginFormData.password}
                                        type={'password'}
                                        item={'password'}
                                        onChangeData={(payload) => dispatch(onChangeValue(payload))} />
                                    <div>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input
                                                id="customCheckLogin"
                                                type="checkbox"
                                                className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                                            />
                                            <span className="ml-2 text-sm font-semibold text-blueGray-600">
                                                Remember me
                                            </span>
                                        </label>
                                    </div>

                                    <div className="text-center mt-6">
                                        <ButtonForm
                                            title={'SIGN IN'}
                                            action={() => console.log('test')}
                                        />
                                    </div>
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
