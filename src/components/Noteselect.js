import React from "react";

export default function Noteselect({title}) {

    return (

        <div className="noteselect">
            {title.length > 11 ? title.substring(0, 11) + "..." : title}
        </div>

    )

}