import React, {useState} from "react";

export default function Noteviewer({currentNote, setCurrentNote, notes, setNotes, currentText, setCurrentText}){

    const [saveButton, setSaveButton] = useState('Unsaved')
    const [animate, setAnimate] = useState(false)

    const handleSave = () => {
        localStorage.setItem('notes', JSON.stringify(notes))
        setAnimate(true)
        setSaveButton('Saved!')
        setTimeout(() => {
            setAnimate(false)
            setSaveButton('Unsaved')
        }, 2000)
    }

    const handleChange = (event) => {
        for (let x = 0; x < notes.length; ++x){
            if (notes[x].title === currentNote){
                notes[x].text = event.target.value
                setCurrentText(notes[x].text)
                break
            }
        }
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
            {currentNote !== '           ' && <textarea className="textbox" placeholder="Type your text here" onChange={handleChange} value={currentText}></textarea>}
            {currentNote !== '           ' && <div className={`savebutton ${animate ? "saveanimation" : ''}`} onClick={handleSave}>{saveButton}</div>}
        </div>

    )

}