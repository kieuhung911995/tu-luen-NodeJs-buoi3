const express = require("express");
const userRouter = express.Router();
const userModel = require("./user.schema");
const { v4: uuidv4 } = require("uuid");
const randomID = uuidv4();
const _ = require("lodash");

//Read
userRouter.get("/", async (req, res) => {
  try {
    const findUser = userModel.find({ name: "Tâm" });
    const doc = await findUser.exec(); //chi co promise moi dc them await
    res.send(doc);
  } catch (error) {
    console.log(error);
  }
});

//Create
userRouter.post("/", async (req, res) => {
  try {
    const addUser = await userModel.create({
      name: "Hưng",
      age: 28,
      address: "HN",
      gender: "male",
      album: [
        {
          id: `${randomID}`,
          name: "Song3",
          author: "Author 3",
          kind: "Lofi",
        },
        {
          id: `${randomID}`,
          name: "Song4",
          author: "Author 4",
          kind: "Romance",
        },
      ],
    });
    res.send(addUser);
  } catch (error) {
    console.log(error);
  }
});

//Update
userRouter.patch("/:userId", async (req, res) => {
  try {
    const updateUser = await userModel
      .findByIdAndUpdate(req.params.userId, { address: "da nang" })
      .exec();
    res.send(updateUser);
  } catch (error) {
    console.log(error);
  }
});

//Delete
userRouter.delete("/:userId", async (req, res) => {
  try {
    const deleteUser = await userModel.deleteOne({ _id: req.params.userId });
    res.send(deleteUser);
  } catch (error) {
    console.log(error);
  }
});

//Update: add newSong bang cach lay ve chinh sua roi save()
userRouter.patch("/:userId/album", async (req, res) => {
  try {
    // co the truyen newSong o reqbody postman len
    const newSong = {
      id: `${randomID}`,
      name: "Song3",
      author: "Author 3",
      kind: "Lofi",
    };
    const findUser = userModel.findById(req.params.userId);
    const doc = await findUser.exec();
    doc.album = _.concat(doc.album, newSong);
    doc.save();
    res.send(doc);
  } catch (error) {
    console.log(error);
  }
});

//Delete Song
userRouter.delete("/:userId/album/:songId", async (req, res) => {
  try {
    const findUser = userModel.findById(req.params.userId);
    const doc = await findUser.exec();
    const deleteIndexSong = _.findIndex(doc.album, function (o) {
      return o.id == req.params.songId;
    });
    _.pullAt(doc.album, deleteIndexSong);
    doc.save();
    res.send(doc);
  } catch (error) {
    console.log(error);
  }
});
module.exports = userRouter;
