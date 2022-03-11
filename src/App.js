import React, {useEffect, useState} from "react";
import Sidebar from "./components/Sidebar.js";
import logo from "./images/logo.png";
import Topbar from "./components/Topbar.js";
import Noteviewer from "./components/Noteviewer.js";

export default function App() {

  const [moveRight, setMoveRight] = useState(false)
  const [moveLeft, setMoveLeft] = useState(false)
  const [currentNote, setCurrentNote] = useState('         ')
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])

  const move = () => {
    if (!moveRight){
      setMoveRight(true)
      setMoveLeft(false)
    }
    else if (!moveLeft){
      setMoveLeft(true)
      setMoveRight(false)
    }
  }

  return (

    <div>
      <div className="topleft">
        <img src={logo} alt="not found" onClick={move} className={`${moveRight ? "moveright" : ''} ${moveLeft ? "moveleft" : ''} logoimage`}/>
      </div>
      <Topbar notes={notes} currentNote={currentNote} setCurrentNote={setCurrentNote} setNotes={setNotes}/>
      <Sidebar notes={notes} setNotes={setNotes} setCurrentNote={setCurrentNote} currentNote={currentNote}/>
      <Noteviewer currentNote={currentNote} setCurrentNote={setCurrentNote} notes={notes} setNotes={setNotes}/>
    </div>

  )

}