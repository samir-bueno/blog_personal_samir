import Header from "./components/Header";
import Footer from "./components/Footer";
import {Post} from "./components/Post";
import MainContent from "./components/MainContent";
import { useEffect, useState } from "react";
import supabase from "./lib/helper/supabaseClient";
   
   
export default function App(){
  
  const[user, setUser] = useState(null)
  
  useEffect(() => {
  
      const session =  supabase.auth.getSession();
      setUser(session?.user)

      const {
        data: {subscription}
      } = supabase.auth.onAuthStateChange((event, session) =>{
        switch(event) {
          case "SIGNED_IN":
            setUser(session?.user);
            break;
          case "SIGNED_OUT":
            setUser(null);
            break;
          default:
            console.log("caso no estimado");
        }
      });
     return () => {
      subscription.unsubscribe()

     }

   },[])
  
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({  
      provider: "github",
    });
  };
   
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return( 
  <>
    {user ? (
      <div>
        <h2>Authenticated</h2>
        <button onClick={handleLogout}>logout</button>
      </div>
    ) : (
      <button onClick={handleLogin}>login Github</button>
    )}

  <Header/>
  <button onClick={handleLogin}>Iniciar sesion Github</button>
  <Post titulo={"Viaje Sierra de la ventana 2023"} 
        descripcion={"montaña de sierra de la ventana"} 
        link={"./imgs/monataña_sierra-de-la-ventana.jpg"} 
        parrafo={"El viaje educativo del año 2023 fue una experencia interesante "}       
        /> 
  <MainContent/>
  <Footer/>
  </>
  )
} 