import {useQuery} from "@apollo/client";
import {ALL_NOTES} from "../../graphql";
import React from "react";
import NoteFeed from "./NoteFeed";

const Notes = () => {
    const {data, loading,error} = useQuery(ALL_NOTES);
    if (loading) return (<>Loading...</>);
    if (error) return (<>Error</>);
    return (
        <NoteFeed allNote={data.allNote}/>
    )
}

export default Notes;