const mongoose = require("mongoose");

const UploadSchema = new mongoose.Schema(

    {
        name: {
          type: String,
        },
        avatar: {
          type: String,
        },
        cloudinary_id: {
          type: String,
        },
      },

  { timestamps: true }
);

module.exports = mongoose.model("Upload", UploadSchema);