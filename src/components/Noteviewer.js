import React from "react";

export default function Noteviewer({currentNote, setCurrentNote, notes, setNotes}){

    const changeTitle = (event) => {
        for (let x = 0; x < notes.length; ++x){
            if (notes[x].title === currentNote){
                setNotes(y => {
                    let ret = [...y]
                    ret[x].title = event.target.value
                    return ret
                })
            }
        }
        setCurrentNote(event.target.value)
    }

    return (

        <div className="noteviewer">
            {currentNote !== '' && <input className="titlebox" type="text" value={currentNote} onChange={changeTitle} placeholder="Title your note"/>}
        </div>

    )

}