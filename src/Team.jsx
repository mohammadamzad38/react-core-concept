import { useState } from "react"

export default function Team(){

    const [team, setTeam] = useState(10);

    const playerAdd = () =>{
         const newTeam = team + 1;
         setTeam(newTeam)
    }

    const playerReduce = () =>{
        const reducelayer = team - 1;
        setTeam(reducelayer)
    }

    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }

    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={playerAdd}>Add</button>
            <button onClick={playerReduce}>Reduce</button>
        </div>
    )
}