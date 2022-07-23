import React from "react";
import notes from "../notes";
import Cards from "./Cards";

function getNotes(notes) {
    return (< Cards
        key={notes.key}
        title ={notes.title}
        content = {notes.content} />);
}
function Note(){
    return (<div > {notes.map(getNotes)}</div>)
}
export default Note;