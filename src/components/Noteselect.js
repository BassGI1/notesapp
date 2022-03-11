import React from "react";

export default function Noteselect({title, currentNote, setCurrentNote, notes, setNotes}) {

    return (

        <div onClick={() => setCurrentNote(title)} className={`${currentNote === title ? 'highernoteselect' : 'noteselect'}`}>
            <p style={{position: "absolute"}}>{title.length > 11 ? title.substring(0, 11) + "..." : title}</p>
            {currentNote === title && <img src="https://freesvg.org/img/trash.png" alt="delete" className="trash" onClick={() => {
                for (let x = 0; x < notes.length; ++x){
                    if (notes[x].title === currentNote){
                        setNotes(y => {
                            let ret = [...y]
                            ret.splice(x, 1)
                            localStorage.setItem('notes', JSON.stringify(ret))
                            return ret
                        })
                        title = ''
                        setCurrentNote('         ')
                        break
                    }
                }
            }}/>}
        </div>

    )

}