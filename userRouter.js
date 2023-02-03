const express = require("express");
const userRouter = express.Router();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userModel = require("./index");

mongoose.connect("mongodb://127.0.0.1:27017/tuhocMongoose");

userRouter.get("/", async (req, res) => {
  try {
    userModel
      .find({
        name: "Tâm", // search query
      })
      .then((doc) => {
        console.log(doc);
      })
      .catch((err) => {
        console.error(err);
      });
    res.send("Đã vào route /users");
  } catch (error) {
    console.log(error);
  }
});

// userRouter.post("/", (req, res) => {
//   try {
//     console.log("Đã vào route /users");
//   } catch (error) {
//     console.log("failed");
//   }
//   res.send("Đã vào route /users");
// });
// userRouter.patch("/", (req, res) => {
//   try {
//     console.log("Đã vào route /users");
//   } catch (error) {
//     console.log("failed");
//   }
//   res.send("Đã vào route /users");
// });
// userRouter.delete("/", (req, res) => {
//   try {
//     console.log("Đã vào route /users");
//   } catch (error) {
//     console.log("failed");
//   }
//   res.send("Đã vào route /users");
// });
// userRouter.patch("/", (req, res) => {
//   try {
//     console.log("Đã vào route /users");
//   } catch (error) {
//     console.log("failed");
//   }
//   res.send("Đã vào route /users");
// });
// userRouter.delete("/", (req, res) => {
//   try {
//     console.log("Đã vào route /users");
//   } catch (error) {
//     console.log("failed");
//   }
//   res.send("Đã vào route /users");
// });
module.exports = userRouter;
