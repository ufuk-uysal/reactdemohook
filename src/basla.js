import React from 'react'
import { Button } from 'reactstrap';

export default function Basla() {

    const basla = () => {
        console.log("temel react hooks");
    }

    return (
        <div>
            <Button onClick={basla} color="danger">Danger!</Button>
        </div>
    )
}
