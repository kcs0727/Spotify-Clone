import React from 'react'
import { SongData } from '../context/songcontext'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';
import { FaBookmark, FaPause, FaPlay, FaRegBookmark } from 'react-icons/fa';
import { UserData } from '../context/usercontext';
import SongList from '../components/SongList';

export default function Album() {

    const { albumdata, albumsong, fetchalbumsong} = SongData();
    const params = useParams();

    useEffect(() => {
        fetchalbumsong(params.id);
    }, [params.id])


    return (
        <div>
            {albumdata &&
                <div className='mt-5 md:mt-10 flex gap-5 md:gap-8 flex-row items-center'>

                    {albumdata.thumbnail ? (
                        <img src={albumdata.thumbnail.url} className='size-32 sm:size-40 md:size-48 rounded' alt="" />
                    ) : (
                        <img src={assets.thumbnail} className='size-32 sm:size-40 md:size-48 rounded' alt="" />
                    )}

                    <div className='flex flex-col'>
                        <p>Playlist</p>
                        <h2 className='text-xl sm:text-2xl md:text-4xl font-semibold sm:font-bold mb-3 sm:mb-5'>{albumdata.title} Playlist</h2>
                        <div className='flex gap-3 items-center'>
                            <img src={assets.tunehive_logo} className='size-6' alt="" />
                            <p className='max-sm:text-xs'>{albumdata.description}</p>
                        </div>
                    </div>
                </div>
            }

            <div className='flex mt-6 my-4 pl-1 sm:pl-2 text-[#a7a7a7] items-center'>
                <p className='w-[50%] sm:w-[35%] pl-5'><b>#</b></p>
                <p className='w-[33%] sm:w-[25%]'>Artist</p>
                <p className='w-[35%] hidden sm:block'>Description</p>
                <p className='w-[17%] sm:w-[10%]'>Actions</p>
            </div>
            <hr className='text-[#a7a7a7]' />


            {albumsong && albumsong.map((song, i) => (
                <SongList key={i} song={song}/>
            ))}
        </div>
    )
}
