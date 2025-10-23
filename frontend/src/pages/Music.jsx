import React from 'react'
import { SongData } from '../context/songcontext'
import SongList from '../components/SongList';

export default function Music() {

    const {songs}= SongData();

    return (
        <div>
            <h1 className='text-xl md:text-2xl font-bold my-4 md:my-5 text-slate-200'>Explore All Songs</h1>

            <div>
                {
                    songs.map((song, i) => (
                        <SongList key={i} song={song} />
                    ))
                }
            </div>
        </div>
    )
}
