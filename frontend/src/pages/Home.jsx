import React from 'react'
import { SongData } from '../context/songcontext'
import Albumitem from '../components/Albumitem';
import Songitem from '../components/Songitem';

export default function Home() {

  const { songs, albums } = SongData();

  const tollywoodSongs = songs.filter((song) => {
    const searchId = import.meta.env.VITE_TOLLYWOOD_ID?.toLowerCase();
    return (
      song.album.toLowerCase().includes(searchId)
    )
  })

  const bollywoodSongs = songs.filter((song) => {
    const searchId = import.meta.env.VITE_BOLLYWOOD_ID?.toLowerCase();
    return (
      song.album.toLowerCase().includes(searchId)
    )
  })


  return (
    <div className='mt-5 text-slate-200'>
      <h1 className='text-xl md:text-2xl font-bold my-4 md:my-5'>Featured Charts</h1>
      <div className='flex overflow-auto'>
        {
          albums.map((album, i) => (
            <Albumitem key={i} image={album.thumbnail?.url} name={album.title} desc={album.description} id={album._id} />
          ))
        }
      </div>

      <h1 className='text-xl md:text-2xl font-bold my-4 md:my-5'>Today's biggest hits</h1>
      <div className='flex overflow-auto'>
        {
          songs.map((song, i) => (
            <Songitem key={i} image={song.thumbnail?.url} name={song.title} desc={song.description} id={song._id} />
          ))
        }
      </div>

      <h1 className='text-xl md:text-2xl font-bold my-4 md:my-5'>Tollywood hits</h1>
      <div className='flex overflow-auto'>
        {
          tollywoodSongs.map((song, i) => (
            <Songitem key={i} image={song.thumbnail?.url} name={song.title} desc={song.description} id={song._id} />
          ))
        }
      </div>

      <h1 className='text-xl md:text-2xl font-bold my-4 md:my-5'>Bollywood hits</h1>
      <div className='flex overflow-auto'>
        {
          bollywoodSongs.map((song, i) => (
            <Songitem key={i} image={song.thumbnail?.url} name={song.title} desc={song.description} id={song._id} />
          ))
        }
      </div>

    </div>
  )
}

