import React,{useEffect, useState} from "react";
import axios from "axios";
import Cards from "./cards";
import { Link } from "react-router-dom";


function Playlist(props){
 const [token,setToken] = useState("")
 const [items,setItems] = useState([])
 

  useEffect(()=>{
    const hash = window.location.hash;
    let tokenStored = window.localStorage.getItem("access_token");

    if(!token && hash){
     const tokenFromHash =  hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
      window.location.hash = ""
      window.localStorage.setItem("access_token", tokenFromHash);
      setToken(tokenFromHash)
      console.log("hash",tokenFromHash)
      

    }else{
      console.log("settiken",tokenStored)
      setToken(tokenStored)
    }
    console.log("l1",token)
   
   
  },[]);
  const fetchDataPlaylist = async()=>{
   
    try{
      
    const{data} = await axios.get("https://api.spotify.com/v1/me/playlists",{
      headers: {
        Authorization: `Bearer ${token}`

      }
    })
    console.log( token)
    setItems(data.items)
    console.log(data.items)
    

  }  catch(err){
    console.error(err)

  }
}
const fetchDataLikedPlaylist = async()=>{
  try{
  const{data} = await axios.get("https://api.spotify.com/v1/me/tracks?market=in",{
    headers: {
      Authorization: `Bearer ${token}`

    }
  })
  console.log(token)
  // setItems(data.items)
  console.log(data)
  

}  catch(err){
  console.error(err)

}
}
  // console.log(data)
  useEffect(() => {
    if (token) {
      fetchDataLikedPlaylist();
      fetchDataPlaylist();
      
    }
  }, [token]);

 
  

    return (
    
       <div>
        <button onClick={fetchDataLikedPlaylist}>+</button>
       <Link to={"/playlistTrack"}> <Cards  items = {items}/></Link>
       </div>
    )
  
  }
  export default Playlist;