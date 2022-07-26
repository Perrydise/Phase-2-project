import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function CryptoForm ({ onItemFormSubmit }) {
    const [newName, setNewName] = useState("")
    const [newDescription, setNewDescription] = useState("")

    function handleCoinName (event) {
        setNewName(event.target.value)
    }

    function handleCoinDescription (event) {
        setNewDescription(event.target.value)
    }

    function handleCoinSubmit(event) {
        event.preventDefault()
        const newItem = {
            id: uuid(),
            name: newName,
            description: newDescription
        }
        fetch("http://localhost:3000/coins", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newItem)
  })
  onItemFormSubmit(newItem)
  setNewName("")
  setNewDescription("")
    }

return (
    <form className="new-crpyto-form" onSubmit={handleCoinSubmit}>
        <div className="name-div">
        <label for="Project name">Enter your projects name: </label>
        <input className="name-box" type="text" name="Project name" value={newName} onChange={handleCoinName}/>
        </div>
        <div className="description-div">
        <label for="Description">Enter your projects description: </label>
        <input className="description-box" type="text" name="Description" value={newDescription} onChange={handleCoinDescription}/>
        </div>
        <input type="submit" value="Add project"/>
    </form>
)
} 

export default CryptoForm