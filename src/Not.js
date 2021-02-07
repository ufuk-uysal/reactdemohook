import React from 'react'
import "./App.css"

export default function Not(props) {
    const  {ad, aciklama, tarih} = props;
    
    return (
        <div className="not">
            <h5>{ad}</h5>
            <h3>{aciklama}</h3>
            <hr/>
            <p>{tarih}</p>
        </div>
    )
}
