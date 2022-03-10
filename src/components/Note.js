import React, {useState} from "react";

export default function Note({title, activation, notes, setNotes}) {

    const activate = () => {
        let newthing = [...notes]
        for (let x = 0; x < newthing.length; ++x){
            if (newthing[x].title == title){
                newthing[x].activation = !newthing[x].activation
            }
        }
        setNotes(newthing)
    }

    return (

        <div onClick={activate} className="notediv">
            <div style={{width: "5%", height: "80%", backgroundColor: activation ? "#53cc81" : "#4C6663", marginRight: "1.5vw"}}></div>
            {title.length > 32 ? title.substring(0, 32) : title}
        </div>

    )

}