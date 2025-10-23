import React from 'react'
import { useState } from 'react'
import { FaPlay, FaBookmark, FaRegBookmark, FaPause, FaDownload } from 'react-icons/fa';
import { HiOutlineDotsVertical } from "react-icons/hi";
import { UserData } from '../context/usercontext';
import { useEffect } from 'react';
import { SongData } from '../context/songcontext';


export default function Songitem({ image, name, desc, id }) {

    const { addtoplaylist, user } = UserData();
    const { selectedsong, setselectedsong, isplaying, setisplaying, downloadSong } = SongData();

    const [showActions, setShowActions] = useState(false);
    const [saved, setsaved] = useState(false);

    const playlist = user.playlist;
    useEffect(() => {
        if (playlist && playlist.includes(id)) {
            setsaved(true);
        }
    }, [user])


    const playHandler = () => {
        if (selectedsong == id && isplaying) {
            setisplaying(false);
        }
        else if (selectedsong == id) {
            setisplaying(true);
        }
        else {
            setselectedsong(id);
            setisplaying(true);
        }
    }

    const saveToPlaylistHandler = () => {
        setsaved(!saved);
        addtoplaylist(id);
    }

    const downloadHandler = () => {
        downloadSong(id, name);
    }


    return (
        <div className='min-w-[140px] md:min-w-[160px] lg:min-w-[180px] px-1 md:px-2 mb-4 rounded-lg cursor-pointer hover:bg-[#ffffff14] hover:scale-95'>

            <div className='relative group'>
                <img src={image} alt="" className='rounded size-[130px] md:size-[150px] lg:size-[160px]' onClick={playHandler} />

                <button type="button" className="lg:hidden absolute bottom-1 right-1 bg-black/80 text-white p-1 rounded cursor-pointer" onClick={() => setShowActions(!showActions)}>
                    <HiOutlineDotsVertical size={18} />
                </button>

                <div className={`absolute bottom-1 right-10 lg:right-2 gap-2 items-center ${showActions ? "flex" : "hidden"} lg:group-hover:flex`}>
                    <button type='button' className='bg-sky-400/90 text-black/80 p-2 rounded-full cursor-pointer hidden lg:block' onClick={playHandler}>
                        {isplaying && selectedsong == id ? <FaPause /> : <FaPlay />}
                    </button>
                    <button type='button' className='bg-sky-400/90 text-black/80 p-2 rounded-full cursor-pointer' onClick={downloadHandler}>
                        <FaDownload />
                    </button>
                    <button type='button' className='bg-sky-400/90 text-black/80 p-2 rounded-full cursor-pointer' onClick={saveToPlaylistHandler}>
                        {saved ? <FaBookmark /> : <FaRegBookmark />}
                    </button>
                </div>
            </div>

            <p className='font-semibold md:font-bold text-md md:text-md mt-1 md:mt-2 mb-1 pl-1 w-34 md:w-38 truncate'>{name}</p>
            <p className='text-xs md:text-md text-slate-200 pl-1 w-34 md:w-38 truncate'>{desc}</p>
        </div>
    )
}
