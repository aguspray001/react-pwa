import React, { useEffect, useState } from "react";
import Arrived from "./components/Arrived";
import AsideMenu from "./components/AsideMenu";
import Browse from "./components/Browse";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {

  const [items, setItems] = useState([]);

  const fecthingData = async () =>{
    const response = await fetch("https://prod-qore-app.qorebase.io/8ySrll0jkMkSJVk/allItems/rows?limit=7&offset=0&$order=asc", {
      headers :{
        "Content-Type": "application/json",
        "accept" : "application/json",
        "x-api-key" : process.env.REACT_APP_API_KEY
      }
    })

    const {nodes} = await response.json();
    setItems(nodes)
  }

  useEffect(() => {
    fecthingData()
  }, [])

  return (
    <>
      {/* <Header />
      <Hero />
      <Browse /> */}
      <Arrived items={items}/>
      {/* <Clients />
      <AsideMenu />
      <Footer /> */}
    </>
  );
}

export default App;
