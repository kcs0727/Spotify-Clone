import express from 'express';

import uploadfile from '../middlewares/multer.js';
import isauth from '../middlewares/isauth.js';

import { addsong, createalbum, deletesong, getallalbums, getallsongs, getallsongsbyalbum, getsong } from '../controllers/songControllers.js';
import { albumvalidation, songvalidation } from '../middlewares/validation.js';

const router= express.Router();

router.post("/album/new",isauth ,uploadfile, albumvalidation, createalbum);

router.get("/album/all", isauth ,getallalbums);

router.post("/new", isauth, uploadfile, songvalidation, addsong);

router.delete("/delete/:id", isauth, deletesong);

router.get("/all", isauth, getallsongs);

router.get("/album/:id", isauth, getallsongsbyalbum);

router.get("/:id",isauth,getsong);


export default router;