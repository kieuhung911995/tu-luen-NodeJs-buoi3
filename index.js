const express = require("express");
const app = express();
const userRouter = express.Router();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Types = mongoose.Types;

mongoose.connect("mongodb://127.0.0.1:27017/tuhocMongoose");

// Tao schema dk model (kieu du lieu chuan cua tung document trong colletion)
const userSchema = new Schema({
  name: Schema.Types.String,
  age: Schema.Types.Number,
  address: Schema.Types.String,
  gender: Schema.Types.String,
  album: [
    {
      id: Schema.Types.String,
      name: Schema.Types.String,
      author: Schema.Types.String,
      kind: Schema.Types.String,
    },
  ],
});

//Tao model (User collection dc tao trong db tuhocMongoose)
const userModel = mongoose.model("User", userSchema);

// Tao route HOME
app.get("/", (req, res) => {
  try {
    console.log("Đã vào route HOME");
  } catch (error) {
    console.log("failed");
  }
  res.send("Đã vào route HOME");
});

// Tao collection User co data
app.post("/", async (req, res) => {
  try {
    const user = await userModel.create(
      {
        name: "Tâm",
        age: 20,
        address: "HN",
        gender: "male",
        album: [
          { id: randomID, name: "Song1", author: "Author 1", kind: "Lofi" },
          { id: randomID, name: "Song2", author: "Author 2", kind: "Romance" },
        ],
      },
      {
        name: "Hưng",
        age: 28,
        address: "HN",
        gender: "male",
        album: [
          { id: randomID, name: "Song3", author: "Author 3", kind: "Lofi" },
          { id: randomID, name: "Song4", author: "Author 4", kind: "Romance" },
        ],
      }
    );

    await user.save();
    res.send(user);
  } catch (error) {
    console.log("failed");
  }
});

// Tao route users
app.use("/users", userRouter);

userRouter.get("/", (req, res) => {
  try {
    console.log("Đã vào route /users");
  } catch (error) {
    console.log("failed");
  }
  res.send("Đã vào route /users");
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
app.listen(3000);
