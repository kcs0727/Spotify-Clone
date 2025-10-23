import React, { useState } from 'react'
import { SongData } from '../context/songcontext'
import SongList from '../components/SongList';

export default function Search() {

    const { songs } = SongData();
    const [query, setQuery] = useState("")

    const filteredSongs = songs.filter((song) => {
        const searchText = query.trim().toLowerCase()
        return (
            song.title.toLowerCase().includes(searchText) ||
            song.singer?.toLowerCase().includes(searchText) ||
            song.description?.toLowerCase().includes(searchText)
        )
    })


    return (
        <div className='my-4 md:my-5'>

            <div className="flex items-center gap-3 max-w-md w-full p-2">
                <div className="flex items-center w-full border-2 pl-1 pt-1 bg-white border-gray-500/30 h-[26px] rounded-md overflow-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 30 30" fill="#6B7280">
                        <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
                    </svg>
                    <input type="text" placeholder="Search for songs" className="w-full h-full border-none outline-none text-gray-500 placeholder-gray-500 text-sm pb-2" value={query} onChange={(e) => setQuery(e.target.value)} autoFocus/>
                </div>

                <button type="submit" className="bg-indigo-500 w-32 h-[26px] rounded-md text-sm text-white cursor-pointer">Search</button>
            </div>

            <h1 className='text-xl md:text-2xl font-bold my-3'>Search results...</h1>

            <div className='flex mt-6 my-4 pl-1 sm:pl-2 text-[#a7a7a7] items-center'>
                <p className='w-[50%] sm:w-[33%] pl-5'><b>#</b></p>
                <p className='w-[30%] sm:w-[25%]'>Artist</p>
                <p className='w-[33%] hidden sm:block'>Description</p>
                <p className='w-[20%] sm:w-[14%]'>Actions</p>
            </div>
            <hr className='text-[#a7a7a7]' />

            <div >
                { query && filteredSongs.length>0 ?
                    filteredSongs.map((song, i) => (
                        <SongList key={i} song={song}/>
                    ))
                    :
                    (<p className="text-gray-400 mt-4 text-sm md:text-base text-center">No songs found.</p>)
                }
            </div>
        </div>
    )
}

