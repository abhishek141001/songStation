import React, { useEffect } from "react";
import axios from "axios";


function PlaylistTrack(){
const [token,setToken] = ([])

// useEffect(()=>{
//     const getRefreshToken = async () => {

//         // refresh token that has been previously stored
//         const refreshToken = localStorage.getItem('refresh_token');
//         const url = "https://accounts.spotify.com/api/token";
     
//          const payload = {
//            method: 'POST',
//            headers: {
//              'Content-Type': 'application/x-www-form-urlencoded'
//            },
//            body: new URLSearchParams({
//              grant_type: 'refresh_token',
//              refresh_token: refreshToken,
//              client_id: "2f3b74e893504f21a3a36ae46e809be1"
//            }),
//          }
//          const body = await fetch(url, payload);
//          const response = await body.json();
     
//          localStorage.setItem('access_token', response.accessToken);
//          localStorage.setItem('refresh_token', response.refreshToken);
//          console.log("refresh",response.refreshToken,"acc",response.accessToken)
//        }
//        getRefreshToken();
// })
// useEffect(()=>{
//     const token = window.localStorage.getItem("access_token")
   
//     console.log("this is storage data",token)
  

// const fetchPlaylistTrack = async()=>{
//   try{  const {data} = await axios.get("https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=playlist",{
//         Headers:{
//             Authorization: `Bearer ${token}`
//         }
//     })
    
//     console.log(data)
// }
// catch(Error){
//     console.log(Error)
// }
    
// }

// if(url && token){
//     fetchPlaylistTrack()
// }

// },[url,token])

    return(
        <div></div>
    )
}

export default PlaylistTrack;