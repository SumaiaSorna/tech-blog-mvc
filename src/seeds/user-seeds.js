const User = require("../models/User");

const userData = [
  {
    username: "MedinaIslam",
    email: "medina.islam@gmail.com",
    password: "password123",
  },
  {
    username: "MohammedAli",
    email: "Mohammed.ali@gmail.com",
    password: "password123!",
  },
  {
    username: "MayaIslam",
    email: "maya.islam@gmail.com",
    password: "password",
  },
  {
    username: "SarahKhan",
    email: "sarah.khan@gmail.com",
    password: "password567",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
