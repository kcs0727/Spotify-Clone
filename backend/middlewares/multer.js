import multer from "multer";

const storage= multer.memoryStorage();

const uploadfile= multer({storage}).fields([
  { name: "audio", maxCount: 1 },
  { name: "thumbnail", maxCount: 1 }
]);

export default uploadfile;