import React,{useEffect,useState } from 'react'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

export default function UyeDetay({ match }) {

    const [uye, setUye] = useState([]);


    useEffect(()=>{
        uyeGetir()
    },[])

    const uyeGetir = async () => {

        const veriler = await fetch('https://jsonplaceholder.typicode.com/users/'+ match.params.id);
        const uye = await veriler.json();
        setUye(uye);
        console.log(uye)
    }

    return (
     <div>
      <Card>
       
        <CardBody>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{uye.name}</CardSubtitle>
          <CardText>{uye.phone}</CardText>
          <CardText>{uye.website}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
    )
}
