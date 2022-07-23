import React from "react";
import notes from "../notes";
import Cards from "./Cards";


function Note(){
    return (<div > {notes.map(notes => {
         (< Cards
            key={notes.key}
            title ={notes.title}
            content = {notes.content} />);
    })}</div>)
}
export default Note;