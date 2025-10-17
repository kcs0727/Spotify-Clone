import React from 'react'
import { FaBookmark, FaPause, FaPlay, FaRegBookmark } from 'react-icons/fa';
import { SongData } from '../context/songcontext';
import { UserData } from '../context/usercontext';

export default function SongList({song}) {

    const { user,addtoplaylist } = UserData();
    const { setselectedsong, setisplaying, selectedsong, isplaying } = SongData();

    const playHandler = (id) => {
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

    const saveToPlaylistHandler = (id) => {
        addtoplaylist(id);
    }

    return (
        <div className='flex mt-6 my-4 pl-1 sm:pl-2 text-[#a7a7a7] cursor-pointer hover:bg-[#ffffff14] items-center'>

            <p className='w-[50%] sm:w-[35%] flex items-center' onClick={() => playHandler(song._id)}>
                <img src={song.thumbnail.url} alt="" className='inline size-10 mr-2' />
                <span className='text-white max-sm:text-sm break-all whitespace-normal pr-1'>{song.title}</span>
            </p>

            <p className='w-[33%] sm:w-[25%] max-sm:text-sm break-all whitespace-normal pr-1' onClick={() => playHandler(song._id)}>{song.singer}</p>

            <p className='w-[35%] hidden sm:block break-all whitespace-normal pr-1' onClick={() => playHandler(song._id)}>{song.description}</p>

            <p className='w-[17%] sm:w-[10%] flex justify-start items-center gap-3 sm:gap-5'>
                <button className='text-green-600 rounded-full cursor-pointer' onClick={() => playHandler(song._id)}>
                    {isplaying && selectedsong == song._id ? <FaPause /> : <FaPlay />}
                </button>
                <button type='button' className='text-green-600 rounded-full cursor-pointer' onClick={() => saveToPlaylistHandler(song._id)}>
                    {user?.playlist?.includes(song._id.toString()) ? <FaBookmark /> : <FaRegBookmark />}
                </button>
            </p>

        </div>
    )
}
