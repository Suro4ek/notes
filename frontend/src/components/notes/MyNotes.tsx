import {useQuery} from "@apollo/client";
import {ALL_NOTES, MY_NOTES} from "../../graphql";
import React from "react";
import Notes from "./Notes";
import NoteFeed from "./NoteFeed";

const MyNotes = () => {
    const {data, loading,error} = useQuery(MY_NOTES);
    if (loading) return (<>Loading...</>);
    if (error) return (<>Error</>);
    return (
        <NoteFeed allNote={data.myNote}/>
    )
}

export default MyNotes;