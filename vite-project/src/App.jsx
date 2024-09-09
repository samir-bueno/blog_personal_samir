import Header from "./components/Header";
import Footer from "./components/Footer";
import {Post} from "./components/Post";
import { useEffect, useState } from "react";
import supabase from "./lib/helper/supabaseClient";


export default function app(){

  const[user, setUser] = useState(null)

  useEffect(() => {

    const getSession = async () => {
      //destructuracion => nos permite obtener la propiedad deseada, van entre llaves
      const {data, error} = await supabase.auth. getSession();
      if(error) {
        console.log(error);
      } else {
        setUser(data?.session?.user);
      }

    };

    getSession();
      },[])

  const handleLogin = async () => {
    const {error, data} = await supabase.auth.signInwith0Auth({

      provider: "github"
    });
    if (error) {
      console.log(error)
    }
    else {
      console.log(data)
    }

  }

  return <>
  <Header/>
  <button onClick={handleLogin}>Iniciar sesion Github</button>
  <Post titulo={"Viaje Sierra de la ventana 2023"} 
        descripcion={"montaña de sierra de la ventana"} 
        link={"./imgs/monataña_sierra-de-la-ventana.jpg"} 
        parrafo={"El viaje educativo del año 2023 fue una experencia interesante "}
        
        />
  <Footer/>
  </>;
}