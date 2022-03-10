import React, {useEffect, useState} from "react";
import Sidebar from "./components/Sidebar.js";
import logo from "./images/logo.png";

class note{
  constructor(title){
      this.title = title
      this.activation = true
  }
}

export default function App() {

  const [moveRight, setMoveRight] = useState(false)
  const [moveLeft, setMoveLeft] = useState(false)
  const [currentNote, setCurrentNote] = useState('')
  const [notes, setNotes] = useState(() => [])

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
        <img src={logo} onClick={move} className={`${moveRight ? "moveright" : ''} ${moveLeft ? "moveleft" : ''} logoimage`}/>
      </div>
      <Sidebar notes={notes} setNotes={setNotes}/>
    </div>

  )

}