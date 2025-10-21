import React from 'react'
import { UserData } from '../context/usercontext'
import { Link, useNavigate } from 'react-router-dom';
import { SongData } from '../context/songcontext';
import { MdDelete } from "react-icons/md";
import { useState, useEffect } from 'react';

export default function Admin() {

    const { user } = UserData();
    const navigate = useNavigate();
    useEffect(() => {
        if (user.role !== "admin") {
            navigate("/");
        }
    },[user, navigate]);


    const { albums, songs, addalbum, addsong, loading, deletesong} = SongData();

    const [albumtitle, setalbumtitle] = useState("");
    const [albumdescription, setalbumdescription] = useState("");
    const [albumfile, setalbumfile] = useState(null);
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [singer, setsinger] = useState("");
    const [album, setalbum] = useState("");
    const [file, setfile] = useState(null);
    const [songthumbfile, setsongthumbfile] = useState(null);


    const addAlbumHandler = (e) => {
        e.preventDefault();

        const formdata = new FormData();
        formdata.append("title", albumtitle);
        formdata.append("description", albumdescription);
        formdata.append("thumbnail", albumfile);

        addalbum(formdata, setalbumtitle, setalbumdescription, setalbumfile);
    }

    const addSongHandler = (e) => {
        e.preventDefault();

        const formdata = new FormData();
        formdata.append("title", title);
        formdata.append("description", description);
        formdata.append("singer", singer);
        formdata.append("audio", file);
        formdata.append("album", album);
        formdata.append("thumbnail", songthumbfile);

        addsong(formdata, settitle, setdescription, setfile, setsinger, setalbum, setsongthumbfile);
    }


    const deleteSongHandler = (id) => {
        if (confirm("Are you sure? Want to delete this song ?")) {
            deletesong(id);
        }
    }



    return (
        <div className='h-[90vh] bg-[#212121] p-4 sm:p-8 overflow-auto'>

            <div className='flex justify-end'>
                <Link to="/" className='bg-sky-600 hover:bg-sky-800 font-bold p-2 rounded-md'>Go to Home Page</Link>
            </div>

            <h2 className='text-lg sm:text-2xl font-bold my-3 sm:my-6 text-sky-100'>Add Album :</h2>

            <form onSubmit={addAlbumHandler} className='bg-[#181818] p-6 rounded-lg shadow-lg flex flex-col gap-6'>

                <div>
                    <label className='font-medium'>
                        Title:
                        <input type="text" placeholder='Enter Title' required onChange={(e) => setalbumtitle(e.target.value)} value={albumtitle} />
                    </label>
                </div>

                <div>
                    <label className='font-medium'>
                        Description:
                        <input type="text" placeholder='Enter description' required onChange={(e) => setalbumdescription(e.target.value)} value={albumdescription} />
                    </label>
                </div>

                <div>
                    <label className='font-medium'>
                        Thumbnail:
                        <input type="file" accept='image/*' onChange={(e) => setalbumfile(e.target.files[0])} className='border-none mt-0 w-fit file:bg-white file:text-black file:mx-3 file:px-1 file:cursor-pointer' required />
                    </label>
                </div>

                <div>
                    <button type='submit' disabled={loading} className='w-[100px] bg-sky-400 hover:bg-sky-600 hover:text-white text-black font-semibold py-1 rounded-md my-1 text-lg cursor-pointer'>{loading ? "Adding.." : "Add"}</button>
                </div>

            </form>

            <h2 className='text-lg sm:text-2xl font-bold my-3 sm:my-6 text-sky-100'>Add Song:</h2>

            <form onSubmit={addSongHandler} className='bg-[#181818] p-6 rounded-lg shadow-lg flex flex-col gap-6'>

                <div>
                    <label className='font-medium'>
                        Title:
                        <input type="text" placeholder='Enter Title' required onChange={(e) => settitle(e.target.value)} value={title} />
                    </label>
                </div>

                <div>
                    <label className='font-medium'>
                        Description:
                        <input type="text" placeholder='Enter description' required onChange={(e) => setdescription(e.target.value)} value={description} />
                    </label>
                </div>

                <div>
                    <label className='font-medium'>
                        Singer:
                        <input type="text" placeholder='Enter singer name' required onChange={(e) => setsinger(e.target.value)} value={singer} />
                    </label>
                </div>

                <div>
                    <label className='font-medium'>
                        <div className='inline-block w-[102px]'>Audio:</div>
                        <input type="file" accept='audio/*' onChange={(e) => setfile(e.target.files[0])} className='border-none mt-0 w-fit file:bg-white file:text-black file:mx-3 file:px-1 file:cursor-pointer' required />
                    </label>
                </div>

                <div>
                    <label className='font-medium'>
                        <div className='inline-block w-[102px]'>Thumbnail:</div>
                        <input type="file" accept='image/*' onChange={(e) => setsongthumbfile(e.target.files[0])} className='border-none mt-0 w-fit file:bg-white file:text-black file:mx-3 file:px-1 file:cursor-pointer' required />
                    </label>
                </div>

                <div>
                    <label className='font-medium'>
                        <div className='inline-block w-[102px]'>Album:</div>
                        <select className='ml-3 font-normal bg-black outline-none p-1' onChange={(e) => setalbum(e.target.value)} value={album}>
                            <option value="">Choose Album</option>
                            {
                                albums && albums.map((album, i) => (
                                    <option key={i} value={album._id}>{album.title}</option>
                                ))
                            }
                        </select>
                    </label>
                </div>

                <div>
                    <button type='submit' disabled={loading} className='w-[100px] bg-sky-400 hover:bg-sky-600 hover:text-white text-black font-semibold py-1 rounded-md my-1 text-lg cursor-pointer'>{loading ? "Adding.." : "Add"}</button>
                </div>

            </form>


            <div className='mt-4 sm:mt-8'>
                <h2 className='text-lg sm:text-2xl font-bold mb-3 sm:mb-6'>Added Songs</h2>

                <div className='flex justify-center md:justify-start gap-1 sm:gap-2 items-center flex-wrap'>
                    {
                        songs && songs.map((song, i) => (
                            <div key={i} className='bg-[#181818] p-2 rounded-lg shadow-md flex flex-col items-center' >
                                
                                <img src={song.thumbnail.url} alt="" className='size-32 sm:size-52' />
                               
                                <h4 className='text-md sm:text-lg font-semibold sm:font-bold max-sm:w-32 truncate text-center'>{song.title}</h4>
                                <h3 className='text-sm sm:text-md sm:font-semibold max-sm:w-32 truncate text-center'>{song.singer}</h3>
                                <h3 className='text-sm sm:text-md sm:font-semibold truncate w-32 sm:w-50 text-center'>{song.description}</h3>
                                <button onClick={() => deleteSongHandler(song._id)} className='px-1 mt-1 text-red-500 hover:bg-red-200 rounded flex items-center cursor-pointer'>
                                    Delete <MdDelete />
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )

}
