import React from "react";


function Spotify() {
    const CLIENT_ID = "2f3b74e893504f21a3a36ae46e809be1";
    const REDIRECT_URI = "http://localhost:3000/playlist"
    const AUTH_ENDPOINT = "http://accounts.spotify.com/authorize"
    const SCOPE = "user-read-private user-read-email playlist-read-private"
    const RESPONSE_TYPE = "token"
    
    


    return (
        <div className="Connect">
           
            <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=${RESPONSE_TYPE}`}><img src="/img/spotify.png" /></a>
        </div>
    );
}

export default Spotify;
