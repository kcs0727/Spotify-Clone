import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { UserData } from "./usercontext";
import axios from "./axios";


const Songcontext = createContext();


export const SongProvider = ({ children }) => {

    const { isauth } = UserData();

    const [loading, setloading] = useState(false);
    const [songs, setsongs] = useState([]);
    const [albums, setalbums] = useState([]);

    const [selectedsong, setselectedsong] = useState(null);
    const [song, setsong] = useState(null);
    const [isplaying, setisplaying] = useState(false);
    const [albumsong, setalbumsong] = useState([]);
    const [albumdata, setalbumdata] = useState([]);


    async function fetchsongs() {
        try {
            if (isauth) {
                const { data } = await axios.get("/api/song/all")
                setsongs(data);
                if (data.length) setselectedsong(data[0]._id);
                setisplaying(false);
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    async function fetchalbums() {
        try {
            if (isauth) {
                const { data } = await axios.get("/api/song/album/all")
                setalbums(data);
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchsongs();
        fetchalbums();
    }, [isauth])


    async function fetchsong() {
        try {
            if (selectedsong) {
                const { data } = await axios.get("/api/song/" + selectedsong);
                setsong(data);
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    function nextmusic() {
        if (!songs.length || !selectedsong) return;
        const idx = songs.findIndex(s => s._id === selectedsong);
        const next = (idx + 1) % songs.length;
        setselectedsong(songs[next]._id);
    }

    function prevmusic() {
        if (!songs.length || !selectedsong) return;
        const idx = songs.findIndex(s => s._id === selectedsong);
        const prev = (idx - 1 + songs.length) % songs.length;
        setselectedsong(songs[prev]._id);
    }

    async function fetchalbumsong(id) {
        try {
            const { data } = await axios.get("/api/song/album/" + id);
            setalbumsong(data.songs);
            setalbumdata(data.album);
        }
        catch (err) {
            toast.error(err.response?.data?.message || "Fetching Album failed")
        }
    }


    async function addalbum(formdata, setalbumtitle, setalbumdescription, setalbumfile) {
        setloading(true);
        try {
            const { data } = await axios.post("/api/song/album/new", formdata);
            toast.success(data.message);
            setloading(false);
            fetchalbums();
            setalbumtitle("");
            setalbumdescription("");
            setalbumfile(null);
        }
        catch (err) {
            toast.error(err.response?.data?.message || "Adding Album failed")
            setloading(false);
        }
    }

    async function addsong(formdata, settitle, setdescription, setfile, setsinger, setalbum, setsongthumbfile) {
        setloading(true);
        try {
            const { data } = await axios.post("/api/song/new", formdata);
            toast.success(data.message);
            setloading(false);
            fetchsongs();
            settitle("");
            setdescription("");
            setsinger("");
            setfile(null);
            setalbum("");
            setsongthumbfile(null);
        }
        catch (err) {
            toast.error(err.response?.data?.message || "Adding Song failed")
            setloading(false);
        }
    }

    async function deletesong(id) {
        try {
            const { data } = await axios.delete("/api/song/delete/" + id);
            toast.success(data.message);
            fetchsongs();
        }
        catch (err) {
            toast.error(err.response?.data?.message || "Deleting Song failed")
        }
    }


    return (
        <Songcontext.Provider value={{ addalbum, addsong, deletesong, fetchsong, albums, songs, loading, isplaying, song, selectedsong, setselectedsong, setisplaying, prevmusic, nextmusic, albumdata, albumsong, fetchalbumsong }}>
            {children}
        </Songcontext.Provider>
    )
}


export const SongData = () => useContext(Songcontext);
