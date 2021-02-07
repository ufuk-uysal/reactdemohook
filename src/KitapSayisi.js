import React,{useContext} from 'react'
import {KitapContext} from './KitapContext';

export default function KitapSayisi(props) {

    var [kitaplar] = useContext(KitapContext);

    return (
        <div>
           {kitaplar.length}
        </div>
    )
}
