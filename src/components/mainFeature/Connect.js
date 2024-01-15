import React, { useState } from "react";
import { Link } from "react-router-dom";
import Spotify from "./spotify";
import Youtube from "./youtube";
import { useSelector } from 'react-redux'



function Connect() {
    const user = useSelector((state) => state.userAuth)

const [show, setShow] = useState(false)
    const handleSpotifyEnter = ()=>{
        setShow(!show)
    }
   
    if(user.isLoggedIn){
    return (

        
        <div className="connectPage" >
            <div className="Connect">
            <p>Add your favourit playlist </p><img src="/img/plus.png" width={"60 px"} onClick={handleSpotifyEnter} /> 
        </div>
        <div className={show?"youtubeSpotify show":"youtubeSpotify"}>
            <Spotify/>
            <Youtube/>
        
        </div>
        </div>  
       
    );
    }else{return( <h1>Error</h1> )}
}

export default Connect;
