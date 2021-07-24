const express = require("express");
const app = express();
const morgan = require("morgan")
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const multer = require("multer");
const path = require("path");
const PORT = process.env.PORT || 5000;
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
// const uploadRoute = require("./routes/upload")
const categoryRoute = require("./routes/categories")
const {cloudinary} = require("./utils/cloudinary")
const Upload = require("./models/Upload")



dotenv.config();

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/blog',
  {  useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:false})
    .then(
      console.log("Connected to MongoDB")
    ).catch(err=>console.log(err))
 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("common"));
app.use("/images", express.static(path.join(__dirname, "/images")));


// Define route here
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
// app.use("/api/upload", uploadRoute);

  // Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

}


const upload = multer({ 
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);  
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
 });


app.post("/api/upload", upload.single("file"), async(req, res) => {
  try {
    const filePath = req.file.path
    const result = await cloudinary.uploader.upload(filePath, {
      upload_preset: "blog_folder",
      folder:"blog_folder"
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
     
  } catch (error) {
    console.error(error);
  }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// // Serve up static assets (usually on heroku)

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log("Backend server is running!");
});