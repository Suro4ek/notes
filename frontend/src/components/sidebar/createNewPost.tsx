import Button from "../Button";
import {useState} from "react";
import { Dialog } from '@headlessui/react'
import Input from "../Input";
import {useMutation} from "@apollo/client";
import {ALL_NOTES, CREATE_POST, LOGIN_MUTATION, MY_NOTES} from "../../graphql";
import {isLogging} from "../../cache/cache";

const CreateNewPost = () => {

    let [isOpen, setIsOpen] = useState(false);
    const [createPost, {data, loading, error}] = useMutation(CREATE_POST,
        {refetchQueries: [{query: ALL_NOTES}, {query: MY_NOTES}], onCompleted: data => {
            setDisabled(false);
            }});
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [disabled, setDisabled] = useState(false);

    if(loading && !disabled) setDisabled(true);
    if(error && disabled){
        setDisabled(false);
    }

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    function handleClick(e:any){
        e.preventDefault();
        createPost({variables: {desc: desc, name:name}});
        setName("");
        setDesc("");
    }

    return(
        <>
                <Button text={"Новый пост"} onClick={openModal}/>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                    open={isOpen}
                >
                    <form className="min-h-screen px-4 text-center">
                            <Dialog.Overlay className="fixed inset-0" />

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
              &#8203;
            </span>
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Новый пост
                                </Dialog.Title>
                                <div className="mt-4">
                                    <Input
                                        placeholder={"Введите название"}
                                        id={"name"}
                                        name={"Название"}
                                        value={name}
                                        setValue={setName}
                                    />
                                </div>
                                <div className="mt-4">
                                    <Input
                                        placeholder={"Введите описание"}
                                        id={"name"}
                                        name={"Описание"}
                                        value={desc}
                                        setValue={setDesc}
                                    />
                                </div>

                                <div className="mt-4">
                                    <Button text={"Добавить"} onClick={handleClick} type={"submit"} disabled={disabled}/>
                                </div>
                            </div>
                    </form>
                </Dialog>
        </>
    )
}

export default CreateNewPost;