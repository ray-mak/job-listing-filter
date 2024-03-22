import React from "react";

export default function FilterTablet(props) {
    return (
        <div className="filter--tablet">
            <div className="tag">{props.tag}</div>
            <button className="remove-btn" type="button" aria-label="remove" value={props.tag} onClick={props.handleClick}></button>
        </div>
    )
}