import React from "react";
import Noteselect from "./Noteselect.js";

export default function Topbar({notes, currentNote, setCurrentNote}) {

    return (

        <nav className="topbar">

            {notes.filter(x => x.activation === true).map(x => <Noteselect />)}

        </nav>

    )

}