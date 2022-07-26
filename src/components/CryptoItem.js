import React from "react";

function CryptoItem( {name, description, onDelete, id }) {

    function handleDeleteClick() {
        fetch(`http://localhost:3000/Coins/${id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => onDelete(id))
    }

    return (
        <div className="item-div">
        <li key={id}>
            <h1>Name: {name}</h1>
            <p>Description: {description} </p>
        <button onClick={handleDeleteClick}>Delete</button>
        </li>
        </div>
    )
}

export default CryptoItem