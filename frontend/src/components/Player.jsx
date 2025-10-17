import React, { useState } from 'react'
import { SongData } from '../context/songcontext'
import { useEffect } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';
import { FaVolumeUp, FaVolumeDown, FaVolumeMute, FaVolumeOff } from "react-icons/fa";
import { GrChapterNext, GrChapterPrevious } from 'react-icons/gr'
import { useRef } from 'react';

export default function Player() {
    const { song, isplaying, fetchsong, selectedsong, setisplaying, prevmusic, nextmusic } = SongData();
    const [volume, setvolume] = useState(1);
    const [progress, setprogress] = useState(0);
    const [duration, setduration] = useState(0);
    const [showTooltip, setShowTooltip] = useState(false);
    const audioref = useRef(null);


    useEffect(() => {
        fetchsong();
    }, [selectedsong])

    useEffect(() => {
        const audio = audioref.current;
        if (!audio) return;

        const handleloadmetadata = () => setduration(audio.duration);
        const handletimeupdate = () => setprogress(audio.currentTime);
        const handleEnded = () => {
            nextmusic();         
            setisplaying(true);       
        };


        audio.addEventListener("loadedmetadata", handleloadmetadata);
        audio.addEventListener("timeupdate", handletimeupdate);
        audio.addEventListener("ended", handleEnded);

        return () => {
            audio.removeEventListener("loadedmetadata", handleloadmetadata);
            audio.removeEventListener("timeupdate", handletimeupdate);
            audio.removeEventListener("ended", handleEnded);
        }
    }, [song])


    useEffect(() => {
        const audio = audioref.current;
        if (!audio) return;

        if (isplaying) audioref.current.play();
        else audioref.current.pause();
    }, [isplaying])


    const handlePlayPause = () => {
        if (isplaying) audioref.current.pause();
        else audioref.current.play();
        setisplaying(!isplaying);
    }

    const handleProgressChange = (e) => {
        const newTime = (e.target.value / 100) * duration;
        audioref.current.currentTime = newTime;
        setprogress(newTime);
    }

    const handleVolumeChange = (e) => {
        setShowTooltip(true);
        const newvolume = e.target.value;
        setvolume(newvolume);
        audioref.current.volume = newvolume;
    }

    function formatTime(time) {
        if (isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, "0");
        return `${minutes}:${seconds}`;
    }



    return (
        <div className='h-[10dvh] bg-black flex items-centre'>
            {song && (
                <div className='w-full flex justify-between items-center text-white px-4 py-auto'>

                    {/* song */}
                    <div className='flex items-center gap-3 md:w-[200px]'>
                        <img src={song.thumbnail ? song.thumbnail.url : "https://dummyimage.com/50x50"} alt="" className='size-14' />
                        <div className='hidden md:block'>
                            <p className='w-32 truncate'>{song.title}</p>
                            <p className='text-gray-300 font-thin w-32 truncate'>{song.singer}</p>
                        </div>
                    </div>

                    {/* play and pause */}
                    <div className='flex flex-col items-center gap-1'>
                        {song.audio && (
                            <>
                                {isplaying ?
                                    (<audio ref={audioref} src={song.audio.url} autoPlay />)
                                    : (<audio ref={audioref} src={song.audio.url} />)
                                }
                            </>
                        )}

                        <div className='w-full flex items-center gap-1 font-thin'>

                            <span className="text-xs p-1 sm:px-2 rounded"> {formatTime(progress)} </span>

                            <input type="range" min={"0"} max={"100"} className='w-[120px] sm:w-[200px] md:w-[300px] p-0 m-0 cursor-pointer' value={duration ? (progress / duration) * 100 : 0} onChange={handleProgressChange} aria-label="Seek" />

                            <span className="text-xs p-1 sm:px-2 rounded"> {formatTime(duration)} </span>

                        </div>

                        <div className='flex justify-center items-center gap-4'>
                            <span className='cursor-pointer hover:bg-[#ffffff5d]' onClick={prevmusic}><GrChapterPrevious /></span>
                            <button className='bg-white text-black rounded-full p-2 cursor-pointer hover:bg-[#ffffffd5]' onClick={handlePlayPause}>
                                {isplaying ? <FaPause /> : <FaPlay />}
                            </button>
                            <span className='cursor-pointer hover:bg-[#ffffff5d]' onClick={nextmusic}><GrChapterNext /></span>
                        </div>
                    </div>

                    {/* volume */}
                    <div className='flex items-center gap-2 relative group'>

                        <span>{
                            volume == 0 ? <FaVolumeMute /> : volume < 0.5 ? <FaVolumeDown /> : <FaVolumeUp />
                        }</span>

                        <input type="range" className='[writing-mode:vertical-lr] sm:[writing-mode:horizontal-tb] [direction:rtl] sm:[direction:ltr] w-1 sm:w-16 md:w-32 h-15 sm:h-auto p-0 m-0 cursor-pointer' min={"0"} max={"1"} step={"0.01"} onChange={handleVolumeChange} onTouchEnd={() => setShowTooltip(false)} onMouseUp={() => setShowTooltip(false)} value={volume} aria-label="Volume" />

                        <span className={`absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 transition bg-gray-800 text-white text-xs px-2 py-1 rounded ${showTooltip ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                            {Math.round(volume * 100)}
                        </span>
                    </div>

                </div>
            )}
        </div>
    )
}
