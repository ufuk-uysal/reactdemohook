import React, { useState, useEffect, useContext } from 'react';
import Kitap from "./Kitap";
import { Container } from 'reactstrap'
import {KitapContext} from './KitapContext';




export default function KitapListesi(props) {

  var [kitaplar, setKitaplar] = useContext(KitapContext);

  console.log(kitaplar)
   
  
    useEffect(() => {
       props.fonk(kitaplar.length)
    }, [])

    return (
        <Container>
            <h2>kitap KitapListesi</h2>
           {kitaplar.map((item)=> { 
              return(
                  <div>
                      <h2>
                          {item.kitapAd}
                      </h2>
                  </div>
              );
           })}
           
        </Container>
    )
}
