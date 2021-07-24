const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const Upload = require("../models/Upload");

router.post("/", upload.single("file"),  async(req, res) => {
    try {
      //Upload image to cloudinary
      const filePath = req.file.path
      const result = await cloudinary.uploader.upload(filePath,{
        upload_preset: "blog_folder",
      }) 

      //Create new Upload
      const newUpload = new Upload({
        name: req.body.name,
        avatar: result.secure_url,
        cloudinary_id: result.public_id,
      })
      // Save uploadInfo
      await newUpload.save()
      return res.status(200).json(newUpload);
    } 
    catch (error) {
      console.error(error);
    }
  });

  router.get("/", async (req, res) => {
    try {
      let uploadImage = await Upload.find();
      res.json(uploadImage);
    } catch (err) {
      console.log(err);
    }
  });


  module.exports = router;

