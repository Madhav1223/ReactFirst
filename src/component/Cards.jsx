import React from "react";
function Cards(props) {
    return (
        <div className="note">
            <h1>{props.title}</h1><br />
            <p>{props.content}</p>
        </div>
    )
}
export default Cards;