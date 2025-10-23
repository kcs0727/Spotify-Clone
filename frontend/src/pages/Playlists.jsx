import React from 'react'
import { UserData } from '../context/usercontext'
import { SongData } from '../context/songcontext';
import { useState } from 'react';
import { useEffect } from 'react';
import { assets } from '../assets/assets';
import SongList from '../components/SongList';

export default function Playlist() {

  const { user} = UserData();
  const { songs } = SongData();
  const [myplaylist, setmyplaylist] = useState();

  useEffect(() => {
    if (songs && user && Array.isArray(user.playlist)) {
      const filteredsongs = songs.filter((song) =>
        user.playlist.includes(song._id.toString())
      );
      setmyplaylist(filteredsongs);
    }
  }, [songs, user]);



  return (
    <div>
      <div className='mt-5 md:mt-10 flex gap-5 md:gap-8 flex-row items-center'>

        {myplaylist && myplaylist[0] ? (
          <img src={myplaylist[0].thumbnail.url} className='size-32 sm:size-40 md:size-48 rounded' alt="" />
        ) : (
          <img src={assets.thumbnail} className='size-32 sm:size-40 md:size-48 rounded' alt="" />
        )}

        <div className='flex flex-col'>
          <p>Playlist</p>
          <h2 className='text-xl sm:text-2xl md:text-4xl font-semibold sm:font-bold mb-3 sm:mb-5'>{user.name} Playlist</h2>
          <div className='flex gap-3 items-center'>
            <img src={assets.tunehive_logo} className='size-6' alt="" />
            <p className='max-sm:text-xs'>Your Favourite songs</p>
          </div>
        </div>
      </div>


      <div className='flex mt-6 my-4 pl-1 sm:pl-2 text-[#a7a7a7] items-center'>
        <p className='w-[50%] sm:w-[33%] pl-5'><b>#</b></p>
        <p className='w-[30%] sm:w-[25%]'>Artist</p>
        <p className='w-[33%] hidden sm:block'>Description</p>
        <p className='w-[20%] sm:w-[14%]'>Actions</p>
      </div>
      <hr className='text-[#a7a7a7]' />


      {myplaylist && myplaylist.map((song, i) => (
        <SongList key={i} song={song}/>
      ))}
    </div>
  )
}
