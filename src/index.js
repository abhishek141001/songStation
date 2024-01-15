import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import FirstPage from './first';
import Register from './components/user/register';
import Login from './components/user/Login';
import Route from './route';
import Connect from './components/mainFeature/Connect';
import Spotify from './components/mainFeature/spotify';
import { Store } from './redux/redux';
import { Provider } from 'react-redux';
import Playlist from './components/mainFeature/playlist';
import PlaylistTrack from './components/mainFeature/playlistTrack';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Route/>,
    children:[
      {
        path: "",
        element: <FirstPage/>
      },
      {
        path:"register",
        element: <Register/>
      },
      
      {
        path:"Login",
        element: <Login/>
      },
      {
      
        path: "connect",
        element: <Connect/>
      },
      {
        path: "spotify",
        element:<Spotify/>
      },
      {
        path: "playlist",
        element: <Playlist/>
      },{
        path: "playlistTrack",
        element: <PlaylistTrack/>
      }
    
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
<Provider store={Store}>
    <RouterProvider router={router}/>
    </Provider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
