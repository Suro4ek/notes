import Note from "./Note";
import {useQuery} from "@apollo/client";
import {ALL_NOTES} from "../../graphql";
import React from "react";

const NoteFeed = ({allNote}:any) => {

    return(
        <div className="m-8 grid grid-cols-4 md:grid-cols-8 h-full gap-4 w-full">
            {allNote.map((item:any, index:number) => {
                return <Note name={item.name} desc={item.desc} index={item.id} key={index}/>
            })}
        </div>
    )
}

export default NoteFeed;