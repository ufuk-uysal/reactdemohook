import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Uyeler() {

    const [uyeler, setUyeler] = useState([]);

    useEffect(() => {
        uyeleriGetir();
    }, []) //sayfa ilk oluştuğunda çağırılacak.


    const uyeleriGetir = async () => {

        const veriler = await fetch('https://jsonplaceholder.typicode.com/users');
        const uyeler = await veriler.json();
        setUyeler(uyeler);
        console.log(uyeler)
    }

    return (
        <div>
            <h1>
                Uyeler
            </h1>
            {Object.values(uyeler).map((item) => {
                return (
                    <div>
                        <p key={item.id} style={{ color: "red" }}>
                            <Link to={`/uyeler/${item.id}`}>
                                {item.name}
                            </Link>
                        </p>
                        <hr />
                    </div>


                )
            })

            }
        </div>
    )
}
