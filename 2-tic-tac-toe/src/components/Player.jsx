import { useState } from "react";

export default function PlayerInfo({initialName, symbol}){
    const [playerName, setplayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)

    function handleEditClick(){
            setIsEditing(editin => !editin);
    }

    function handleChange(event){
            setplayerName(event.target.value);
    }

    let editableName = <span className="player-name">{playerName}</span>
    let btnCaption = "Edit"
    if (isEditing) {
        editableName = <input type="text" required value={playerName} onChange={handleChange}/>
        btnCaption="Save"
    }
    return(
        <li>
            <span className="player">
            {editableName}<span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{btnCaption}</button>
             
          </li>
    );
}