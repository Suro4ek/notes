import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import {gql, useMutation} from "@apollo/client";
import {LOGIN_MUTATION} from "../../graphql";
import {isLogging} from "../../cache/cache";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();
    const [nickname, setNickname] = useState("");
    const [password, setPassword] = useState("");
    const [error1, setError1] = useState("");
    const [login, {data, loading, error}] = useMutation(LOGIN_MUTATION,
        {onCompleted: data => {
            localStorage.setItem('token', data.login);
            isLogging(true);
            navigate(`/`);
        }});

    const [disabled, setDisabled] = useState(false);

    if (loading) return (<>Submitting..,.</>);
    if (error && error1 === "") {
        setDisabled(false)
        setError1("ОШИбкпа");
    }

    function handleClick(e:any){
        e.preventDefault();
        login({ variables: { username: nickname, password: password} });
        setNickname("");
        setPassword("");
        setDisabled(true);
    }

    return (
        <div className="h-screen bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4">
            <div className="flex flex-col items-center justify-center">
                LOL Авторизация
                <form className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
                    <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800">
                        Авторизация
                    </p>
                    <Link to={"/register"} className="text-sm mt-4 font-medium leading-none text-gray-500">
                        У вас нет аккауна?{" "}
                        <span tabIndex={0} role="link" aria-label="Sign up here" className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer">
                            {" "}
                            Регистрация
                        </span>
                    </Link>
                    {error1}
                    <div className="mt-12 w-full">
                        <div className="mt-4 w-full">
                            <Input
                                placeholder={"Введите логин"}
                                id={"name"}
                                name={"Логин"}
                                value={nickname}
                                setValue={setNickname}
                            />
                        </div>
                        <div className="mt-4">
                            <Input
                                placeholder={"Введите пароль"}
                                id={"name"}
                                name={"Пароль"}
                                value={password}
                                type={"password"}
                                setValue={setPassword}
                            />
                        </div>
                    </div>
                    <div className="mt-8">
                        <Button text={"Авторизироватся"} onClick={handleClick} type={"submit"} disabled={disabled}/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;