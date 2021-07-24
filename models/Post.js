const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: false,
    },

    upload: [
      {
        type: Schema.Types.ObjectId,
        ref: "Upload"
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
