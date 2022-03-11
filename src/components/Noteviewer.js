import React, {useState} from "react";

export default function Noteviewer({currentNote, setCurrentNote, notes, setNotes}){

    const [text, setText] = useState(() => {
        console.log(notes)
        console.log(currentNote)
        for (let x = 0; x < notes.length; ++x){
            if (currentNote === notes[x].title){
                return notes[x].text
            }
        }
        return ''
    })

    const handleChange = (event) => {
        setText(event.target.value)
    }

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
            {currentNote !== '           ' && <input className="titlebox" type="text" value={currentNote} onChange={changeTitle} placeholder="Title your note"/>}
            {currentNote !== '           ' && <textarea className="textbox" placeholder="Type your text here" onChange={handleChange}>{text}</textarea>}
        </div>

    )

}