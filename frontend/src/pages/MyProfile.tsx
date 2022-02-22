import React, {useEffect, useState} from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import {useMutation, useQuery} from "@apollo/client";
import {CHANGE_USER, ME} from "../graphql";
import {isLogging} from "../cache/cache";

const MyProfile = () => {
    const[changeUser]  = useMutation(CHANGE_USER, {onCompleted: data => {
            localStorage.removeItem("token");
            isLogging(false);
    }
    });
    const {data, loading,error} = useQuery(ME);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        if(!loading){
            setUsername(data.me.nickname);
        }
    },[data]);

    if(loading) return  <>Loading...</>;
    if(error) return <>Error</>;
    function handleClick(){
        if(username !== "" && password !== ""){
            changeUser({variables:{password: password, username: username}})
        }else if(username !== ""){
            changeUser({variables:{username: username}})
        }else if(password !== ""){
            changeUser({variables:{password: password}})
        }
    }

    return (
        <div className="mx-auto container flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-0">
            <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
                <div className="w-80 sm:w-auto flex flex-col justify-start items-start">
                    <div>
                        <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800">Редактор профиля</p>
                    </div>
                    <div className="mt-16 w-full">
                        <Button text={"Сохранить"} type={"submit"} onClick={handleClick}/>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row jusitfy-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0">
                    <Input
                        placeholder={"Логин"}
                        id={"name"}
                        name={"Логин"}
                        value={username}
                        setValue={setUsername}
                    />
                    <Input
                        placeholder={"Пароль"}
                        id={"name"}
                        name={"Пароль"}
                        value={password}
                        setValue={setPassword}
                    />
                </div>
            </div>
        </div>
    );
};

export default MyProfile;

