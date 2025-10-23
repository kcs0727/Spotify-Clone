import albums from "../models/albums.js";
import songs from "../models/songs.js";
import trycatch from "../utils/trycatch.js";
import getdataurl from "../utils/urlgenerator.js";
import cloudinary from 'cloudinary';
import axios from "axios";



export const createalbum = trycatch(async (req, res) => {

    if (req.user.role !== "admin") {
        return res.status(403).json({
            message: "You are not admin"
        })
    }

    const { title, description } = req.body;

    const thumbfile = req.files.thumbnail[0];
    const thumbfileurl = getdataurl(thumbfile);
    const thumbcloud = await cloudinary.v2.uploader.upload(thumbfileurl.content);

    await albums.create({
        title,
        description,
        thumbnail: {
            id: thumbcloud.public_id,
            url: thumbcloud.secure_url
        }
    });

    res.status(201).json({
        message: "Album added"
    })

})


export const getallalbums = trycatch(async (req, res) => {
    const allalbums = await albums.find();
    res.json(allalbums);
})


export const addsong = trycatch(async (req, res) => {
    if (req.user.role !== "admin") {
        return res.status(403).json({
            message: "You are not admin"
        })
    }

    const { title, description, singer, album } = req.body;

    const file = req.files.audio[0];
    const fileurl = getdataurl(file);
    const cloud = await cloudinary.v2.uploader.upload(fileurl.content, { resource_type: "auto" });

    const thumbfile = req.files.thumbnail[0];
    const thumbfileurl = getdataurl(thumbfile);
    const thumbcloud = await cloudinary.v2.uploader.upload(thumbfileurl.content);

    await songs.create({
        title,
        description,
        singer,
        album,
        audio: {
            id: cloud.public_id,
            url: cloud.secure_url,
        },
        thumbnail: {
            id: thumbcloud.public_id,
            url: thumbcloud.secure_url
        }
    })

    res.status(201).json({
        message: "Song added"
    })
})


export const getallsongs = trycatch(async (req, res) => {

    const allsongs = await songs.find();
    res.json(allsongs);
})


export const getallsongsbyalbum = trycatch(async (req, res) => {
    const album = await albums.findById(req.params.id);
    const allsongs = await songs.find({ album: req.params.id })

    res.json({ album, songs: allsongs });
})

export const deletesong = trycatch(async (req, res) => {
    if (req.user.role !== "admin") {
        return res.status(403).json({
            message: "You are not admin"
        })
    }

    const song = await songs.findByIdAndDelete(req.params.id);

    res.json({
        message: "Song Deleted"
    })

})

export const getsong = trycatch(async (req, res) => {
    const song = await songs.findById(req.params.id);
    if (!song) return res.status(404).json({
        message: "Song not found"
    });
    res.json(song);
})

export const downloadSong = trycatch(async (req, res) => {
    const song = await songs.findById(req.params.id);
    if (!song) return res.status(404).json({
        message: "Song not found"
    });
    
    const response = await axios.get(song.audio.url, { responseType: "stream" });

    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Content-Disposition", `attachment; filename="${song.title}.mp3"`);

    response.data.pipe(res);
});