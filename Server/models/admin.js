import mongoose from "mongoose";
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  userName: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  logged: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Admin", adminSchema);
