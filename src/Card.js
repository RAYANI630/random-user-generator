import React from 'react'

export default function Card(props) {
    return (
        <div>
            <img src={props.source}></img>
            <p>{props.name}, {props.address}</p>
        </div>
    )
}
