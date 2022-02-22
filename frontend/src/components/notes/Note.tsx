import Button from "../Button";

const Note = ({name, desc, index}:any) => {
    return(
            <div className="block p-2 rounded-lg shadow-lg bg-white max-w-sm">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{name}</h5>
                <p className="text-gray-700 text-base mb-4">
                    {desc}
                </p>
                <Button text={"sdsd"}/>
            </div>
    )
}

export default Note;