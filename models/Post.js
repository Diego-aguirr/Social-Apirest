const mongosse = require("mongoose");

const PostSchema = new mongosse.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongosse.model("Post", PostSchema);
