import React from "react";

export default function Noteselect({title, currentNote, setCurrentNote}) {

    return (

        <div onClick={() => setCurrentNote(title)} className={`${currentNote === title ? 'highernoteselect' : 'noteselect'}`}>
            {title.length > 11 ? title.substring(0, 11) + "..." : title}
        </div>

    )

}