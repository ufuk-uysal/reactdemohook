import React,{useState, createContext} from 'react'

export const KitapContext = createContext();

export const KitapProvider=props=>{


    const [kitaplar, setKitaplar] = useState([
        { kitapId: 1, kitapAd: 'Bunu herkes bilir.', kitapYazar: 'ufuk1 uysal' },
        { kitapId: 2, kitapAd: 'Bunu herkes bilir2', kitapYazar: 'ufu2 uysal' },
        { kitapId: 3, kitapAd: 'Bunu herkes bilir3', kitapYazar: 'ufuk3 uysal' },
        { kitapId: 4, kitapAd: 'Bunu herkes bilir4', kitapYazar: 'ufuk4 uysal' }
    ]);

    return (
        <KitapContext.Provider  value={[kitaplar, setKitaplar]} >
            {props.children}
        </KitapContext.Provider>
    )
}
