import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { UserData } from "./context/usercontext";
import Loading from "./components/Loading";
import Admin from "./pages/Admin";
import Playlist from "./pages/Playlists";
import Album from "./pages/Album";
import Verify from "./pages/Verify";
import Player from "./components/Player";


function App() {

  const { loading, isauth } = UserData();

  return (
    <div className="h-screen bg-black text-white">

      {loading ? <Loading /> :
        <Routes>

          <Route path="/login" element={isauth ? <Navigate to="/" /> : <Login />} />

          <Route path="/register" element={isauth ? <Navigate to="/"/> : <Register />} />

          <Route path="/verify" element={<Verify />} />

          <Route path="/" element={isauth ? <Home /> : <Navigate to="/login" />} />

          <Route path="/playlist" element={isauth ? <Playlist /> : <Navigate to="/login" />} />

          <Route path="/album/:id" element={isauth ? <Album /> : <Navigate to="/login" />} />

          <Route path="/admin" element={isauth ? <Admin /> : <Navigate to="/login" />} />

          <Route path="/*" element={isauth ? <Navigate to="/" /> : <Navigate to="/login" />} />

        </Routes>
      }

      {isauth ? <Player /> : null}

    </div>
  )
}

export default App;