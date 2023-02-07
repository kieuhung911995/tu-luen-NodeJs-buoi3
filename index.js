// import thu vien
const express = require("express");
const app = express();
const userModel = require("./user.schema");

const { v4: uuidv4 } = require("uuid");
const randomID = uuidv4();

//import route
const userRouter = require("./userRouter");

// Tao route HOME
app.get("/", (req, res) => {
  try {
    console.log("Đã vào route HOME");
  } catch (error) {
    console.log(error);
  }
  res.send("Đã vào route HOME");
});

// Tao collection User co data
app.post("/", async (req, res) => {
  try {
    const user = await userModel.create({
      name: "Tâm",
      age: 20,
      address: "HN",
      gender: "male",
      album: [
        {
          id: `${randomID}`,
          name: "Song1",
          author: "Author 1",
          kind: "Lofi",
        },
        {
          id: `${randomID}`,
          name: "Song2",
          author: "Author 2",
          kind: "Romance",
        },
      ],
    });
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

// Tao route users
app.use("/users", userRouter);

app.listen(3000);
