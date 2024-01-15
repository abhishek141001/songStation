import React,{useState} from 'react';

const Cards = ({ items }) => {

  const [url,setUrl] = useState("")
  const getTracksUrl = (item)=>{
    const url = item.href;
    setUrl(url);
    console.log("url",url)
    window.localStorage.setItem("tracksUrl",url)
    }
  
  return (
    <div className='cardContainer'>
      {items.map(item => (
       
        <div className="cardPlaylist"  onClick={() => getTracksUrl(item)}>
        <div key={item.id} >
          
          {item.images && item.images[0] && item.images[0].url && (
            <img src={item.images[0].url} alt={`Image of ${item.name}`} />
          )}
          <p>{item.name}</p>
        
          
        </div>
       
     </div> ))}
     </div>
  );
};

export default Cards;
