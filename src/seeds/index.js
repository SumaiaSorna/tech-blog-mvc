require("dotenv").config();
const connection = require("../config/connection");
const userSeedData = require("./userSeedData.json");
const blogSeedData = require("./blogSeedData.json");
const commentSeedData = require("./commentSeedData.json");

const { User, Blog, Comment } = require("../models");

const seedDatabase = async () => {
  try {
    await connection.sync({ force: true });
    logInfo("DB connection", "Success");

    const userPromises = userSeedData.map((user) => User.create(user));
    await Promise.all(userPromises);

    // await User.bulkCreate(userSeedData);
    logInfo("Seed success", "Successfully seeded users");

    await Blog.bulkCreate(blogSeedData);
    logInfo("Seed success", "Successfully seeded blogs");

    await Comment.bulkCreate(commentSeedData);
    logInfo("Seed success", "Successfully seeded comments");

    process.exit(0);
  } catch (error) {
    logError("DB connection", error.message);
  }
};

seedDatabase();
