const Comment = require("../models/Comment");

const commentData = [
  {
    text: "Awesome",
    blog_id: 1,
    user_id: 1,
  },
  {
    text: "wow",
    blog_id: 2,
    user_id: 2,
  },
  {
    text: "i really liked it",
    blog_id: 3,
    user_id: 3,
  },
  {
    text: "Great work",
    blog_id: 4,
    user_id: 4,
  },
  {
    text: "Excellent",
    blog_id: 3,
    user_id: 4,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
