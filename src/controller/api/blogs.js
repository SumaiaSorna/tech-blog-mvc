const createBlog = (req, res) => {
  return res.send("createBlog");
};

const updateBlogById = (req, res) => {
  return res.send("updateBlogById");
};

const deleteBlogById = (req, res) => {
  return res.send("deleteBlogById");
};

module.exports = { createBlog, updateBlogById, deleteBlogById };
