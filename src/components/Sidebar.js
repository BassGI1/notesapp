import React, {useState} from "react";
import Note from "./Note.js";

class note{
    constructor(id){
        this.title = id
        this.activation = false
    }
}

export default function Sidebar({notes, setNotes}) {

    return (

        <div className="sidebar">
            <div className="notesheader">
                Notes
                <div className="addnote" onClick={() => setNotes(x => {
                    let y = [...x]
                    y.push(new note("New Note " + (y.length + 1)))
                    return y
                })}>
                    +
                </div>
            </div>
            {notes.map((x, index) => <Note title={x.title} activation={x.activation} notes={notes} setNotes={setNotes} key={x.title + index}/>)}
        </div>

    )

}