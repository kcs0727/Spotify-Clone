import React from 'react'
import { UserData } from '../context/usercontext'
import { SongData } from '../context/songcontext';
import { useState } from 'react';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import { assets } from '../assets/assets';
import { FaBookmark, FaPause, FaPlay } from 'react-icons/fa';

export default function Playlist() {

  const { user, addtoplaylist } = UserData();
  const { songs, setselectedsong, setisplaying, selectedsong, isplaying } = SongData();
  const [myplaylist, setmyplaylist] = useState();

  useEffect(() => {
    if (songs && user && Array.isArray(user.playlist)) {
      const filteredsongs = songs.filter((song) =>
        user.playlist.includes(song._id.toString())
      );
      setmyplaylist(filteredsongs);
    }
  }, [songs, user]);


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
      <div className='mt-10 flex flex-col gap-5 md:gap-8 sm:flex-row items-center'>

        {myplaylist && myplaylist[0] ? (
          <img src={myplaylist[0].thumbnail.url} className='size-40 md:size-48 rounded' alt="" />
        ) : (
          <img src={assets.thumbnail} className='size-40 sm:size-48 rounded' alt="" />
        )}

        <div className='flex flex-col'>
          <p>Playlist</p>
          <h2 className='text-2xl md:text-4xl font-bold mb-5'>{user.name} Playlist</h2>
          <div className='flex gap-3'>
            <img src={assets.spotify_logo} className='w-6' alt="" />
            <p>Your Favourite songs</p>
          </div>
        </div>
      </div>


      <div className='grid grid-cols-3 sm:grid-cols-4 mt-6 my-4 pl-2 text-[#a7a7a7] items-center justify-center'>
        <p><b className='mr-4'>#</b></p>
        <p>Artist</p>
        <p className='hidden sm:block'>Description</p>
        <p>Actions</p>
      </div>
      <hr className='text-[#a7a7a7]' />


      {myplaylist && myplaylist.map((song, i) => (
        <div key={i} className='grid grid-cols-3 sm:grid-cols-4 mt-6 mb-4 pl-2 text-[#a7a7a7] cursor-pointer hover:bg-[#ffffff14] items-center'>

          <p>
            <b className='mr-3'>{i + 1}.</b>
            <img src={song.thumbnail.url} alt="" className='inline size-10 mr-2' />
            <span className='text-white'>{song.title}</span>
          </p>

          <p>{song.singer}</p>
          <p className='hidden sm:block overflow-x-auto'>{song.description}</p>
          <p className='flex justify-start items-center gap-5'>
            <button className='text-green-600 rounded-full cursor-pointer' onClick={() => playHandler(song._id)}>
              {isplaying && selectedsong == song._id ? <FaPause /> : <FaPlay />}
            </button>
            <button type='button' className='text-green-600 rounded-full cursor-pointer' onClick={() => saveToPlaylistHandler(song._id)}>
              <FaBookmark />
            </button>
          </p>

        </div>
      ))}
    </Layout>
  )
}
