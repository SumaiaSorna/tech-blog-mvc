const Blog = require("../models/Blog");

const blogData = [
  {
    title: "Node.js",
    content:
      "Node. js (Node) is an open source development platform for executing JavaScript code server-side",
    userId: 1,
  },
  {
    title: "Javascript",
    content:
      "an object-oriented computer programming language commonly used to create interactive effects within web browsers.",
    userId: 2,
  },
  {
    title: "HTML",
    content:
      "HTML (Hypertext Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables",
    userId: 3,
  },
  {
    title: "CSS",
    content:
      "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
    userId: 4,
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
