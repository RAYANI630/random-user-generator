import React from 'react'

export default function Card(props) {
    return (
        <div className='card'>
            <img src={props.source} className='image'></img>
            <strong><p style={{fontSize:'20px'}}>{props.name}, {props.address}</p></strong>
        </div>
    )
}
