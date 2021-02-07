import React,{useState} from 'react'
import KitapListesi from './KitapListesi';
import KitapSayisi from './KitapSayisi';
import {KitapProvider} from './KitapContext';

export default function KitapPage() {

const [sayi, setSayi] = useState(0);

 const kitapSayisiGetir=(s)=>{
    setSayi(s);
    console.log(s)
 }

    return (
        <KitapProvider>
            <KitapListesi fonk={kitapSayisiGetir}/>
            <KitapSayisi kitapSayisi={sayi}/>
        </KitapProvider>
    )
}
