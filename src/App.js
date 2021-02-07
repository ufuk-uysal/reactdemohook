import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Not from './Not';
import Basla from './basla';


import Nav from './Nav';
import  Hakkimizda from './Hakkimizda';
import  Uyeler from './Uyeler';
import Home from "./Home";
import UyeDetay from './UyeDetay';
import KitapPage from './KitapPage';
import { KitapProvider } from "./KitapContext";
import UseCallBackExample from "./useCallBackExample";

function App() {

  const [cupCount, setCupCount] = useState(0);
  const [metin, setMetin] = useState({ text: "" });
  const [bardaStyle, setbardakStyle] = useState("bardak" + 0);

  const suIctim = () => {
    setCupCount(cupCount + 1)
    setMetin({
      text: "içtiğim Su Bardak Adeti"
    })
  }

  useEffect(() => {
    (cupCount < 3 && setbardakStyle("bardak" + cupCount))

  }, [cupCount])  

  return (
    <div>
<UseCallBackExample/>
      {/* <Router>
          <Nav/>
          <Switch>
                <Route path="/" exact component={Home}/>
                <Route path = "/hakkimizda" component={Hakkimizda}  />
                <Route path = "/uyeler" exact  component={Uyeler} />
                <Route path = "/uyeler/:id" component={UyeDetay} />
                <Route path = "/KitapPage" component={KitapPage} />
                
            </Switch>
      </Router> */}

      {/* <h3  className={bardaStyle} >{cupCount}</h3>
      <p>{metin.text}</p>
      <Button onClick={suIctim} color="danger">Su içtim</Button> */}
    </div>
  );
}

export default App;


{/* <Not ad={metin.text} aciklama="açıklama1" tarih="03.01.1995"/> */ }
