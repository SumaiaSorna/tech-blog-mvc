const Comment = require("../models/Comment");

const commentData = [
  {
    comment: "Awesome",
    blogId: 1,
    userId: 1,
  },
  {
    comment: "wow",
    blogId: 2,
    userId: 2,
  },
  {
    comment: "i really liked it",
    blogId: 3,
    userId: 3,
  },
  {
    comment: "Great work",
    blogId: 4,
    userId: 4,
  },
  {
    comment: "Excellent",
    blogId: 3,
    userId: 4,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
