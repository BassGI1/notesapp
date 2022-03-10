import React, {useState} from "react";
import Note from "./Note.js";

class note{
    constructor(title){
        this.title = title
        this.activation = true
    }
}

export default function Sidebar({notes, setNotes}) {

    return (

        <div className="sidebar">
            <div className="notesheader">
                Notes
                <div className="addnote" onClick={() => setNotes(x => {
                    let y = [...x]
                    y.push(new note("New Note"))
                    return y
                })}>
                    +
                </div>
            </div>
            {notes.map(x => <Note title={x.title} activation={x.activation} key={x.title}/>)}
        </div>

    )

}