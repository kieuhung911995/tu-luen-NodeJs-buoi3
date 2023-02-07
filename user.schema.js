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
module.exports = userModel;
