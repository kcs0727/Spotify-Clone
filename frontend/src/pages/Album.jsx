import React from 'react'
import Layout from '../components/Layout'
import { SongData } from '../context/songcontext'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';
import { FaBookmark, FaPause, FaPlay, FaRegBookmark } from 'react-icons/fa';
import { UserData } from '../context/usercontext';

export default function Album() {

    const {user,addtoplaylist}= UserData();
    const { albumdata, albumsong, fetchalbumsong, setselectedsong, setisplaying, selectedsong, isplaying } = SongData();
    const params = useParams();

    useEffect(() => {
        fetchalbumsong(params.id);
    }, [params.id])

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
        <Layout>
            {albumdata &&
                <div className='mt-10 flex flex-col gap-5 md:gap-8 sm:flex-row items-center'>

                    {albumdata.thumbnail ? (
                        <img src={albumdata.thumbnail.url} className='size-40 sm:size-48 rounded' alt="" />
                    ) : (
                        <img src={assets.thumbnail} className='size-40 sm:size-48 rounded' alt="" />
                    )}

                    <div className='flex flex-col'>
                        <p>Playlist</p>
                        <h2 className='text-2xl md:text-4xl font-bold mb-5'>{albumdata.title} Playlist</h2>
                        <div className='flex gap-3'>
                            <img src={assets.spotify_logo} className='w-6' alt="" />
                            <p>{albumdata.description}</p>
                        </div>
                    </div>
                </div>
            }

            <div className='grid grid-cols-3 sm:grid-cols-4 mt-6 my-4 pl-2 text-[#a7a7a7] items-center'>
                <p><b className='mr-4'>#</b></p>
                <p>Artist</p>
                <p className='hidden sm:block'>Description</p>
                <p>Actions</p>
            </div>
            <hr className='text-[#a7a7a7]' />


            {albumsong && albumsong.map((song, i) => (
                <div key={i} className='grid grid-cols-3 sm:grid-cols-4 mt-6 mb-4 pl-2 text-[#a7a7a7] cursor-pointer hover:bg-[#ffffff14] items-center'>

                    <p>
                        <b className='mr-3'>{i + 1}.</b>
                        <img src={song.thumbnail.url} alt="" className='inline size-10 mr-2' />
                        <span className='text-white'>{song.title}</span>
                    </p>

                    <p>{song.singer}</p>
                    <p className='hidden sm:block overflow-x-auto'>{song.description}</p>
                    <p className='flex justify-start items-center gap-5'>
                        <button className='rounded-full cursor-pointer' onClick={() => playHandler(song._id)}>
                            {isplaying && selectedsong == song._id ? <FaPause /> : <FaPlay />}
                        </button>
                        <button type='button' className='rounded-full cursor-pointer' onClick={() => saveToPlaylistHandler(song._id)}>
                            {user?.playlist?.includes(song._id.toString())?<FaBookmark />:<FaRegBookmark/>}
                        </button>
                    </p>

                </div>
            ))}
        </Layout>
    )
}
