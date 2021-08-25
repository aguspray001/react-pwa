import React, { useEffect, useState } from "react";
import Arrived from "./components/Arrived";
import AsideMenu from "./components/AsideMenu";
import Browse from "./components/Browse";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Offline from "./components/Offline";
import Splash from "./pages/Splash";

function App() {
  const [items, setItems] = useState([]);
  const [offlineStatus, setOfflineStatus] = useState(!navigator.onLine);
  const [isLoading, setIsLoading] = useState(true);

  console.log(offlineStatus);
  const fecthingData = async () => {
    const response = await fetch(
      "https://prod-qore-app.qorebase.io/8ySrll0jkMkSJVk/allItems/rows?limit=7&offset=0&$order=asc",
      {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          "x-api-key": process.env.REACT_APP_API_KEY,
        },
      }
    );

    const { nodes } = await response.json();
    setItems(nodes);
  };

  const handleOfflineStatus = () => {
    setOfflineStatus(!navigator.onLine);
  };

  useEffect(() => {
    fecthingData();

    // handleOfflineStatus();
    window.addEventListener("online", handleOfflineStatus);
    window.addEventListener("offline", handleOfflineStatus);

    setTimeout(() => {
      setIsLoading(false)
    }, 3000);
    
    return () => {
      window.removeEventListener("online", handleOfflineStatus);
      window.removeEventListener("offline", handleOfflineStatus);
    };
  }, [offlineStatus]);

  if (isLoading === true) {
    return <Splash />
  } 
  return (
    <>
      {offlineStatus && <Offline />}
      <Header />
      <Hero />
      <Browse />
      <Arrived items={items} />
      <Clients />
      <AsideMenu />
      <Footer />
    </>
  );
}

export default App;
