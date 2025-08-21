import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { UserData } from "./context/usercontext";
import Loading from "./components/Loading";
import Admin from "./pages/Admin";
import Playlist from "./pages/Playlists";
import Album from "./pages/Album";
import Player from "./components/Player";


function App(){

  const {loading, isauth} = UserData();

  return(
    <div className="h-screen bg-black text-white">

      {loading? <Loading/>:
        <Routes>

          <Route path="/login" element={isauth? <Home/>: <Login/>} />

          <Route path="/register" element={isauth? <Home/>: <Register/>} />

          <Route path="/" element={isauth? <Home/>: <Login/>} />

          <Route path="/playlist" element={isauth? <Playlist/> : <Login/>} />

          <Route path="/album/:id" element={isauth ? <Album/> :<Login />}/>

          <Route path="/admin" element={isauth? <Admin/>: <Login/>} />

        </Routes>
      }

      {isauth? <Player/>:null}

    </div>
  )
}

export default App;