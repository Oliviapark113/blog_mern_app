const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");
const PORT = process.env.PORT || 5000;
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")
const categoryRoute = require("./routes/categories")

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

 

// //middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("common"));
app.use("/images", express.static(path.join(__dirname, "/images")));


// Define route here
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

  // Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

}


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
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