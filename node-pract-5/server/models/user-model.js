const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      minLength: [3, "username should be atleast 3 character long"],
    },
    email: {
        type: String,
        required: true,
        unique: [true,"user exist"],
        match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
      },
      
    password: { 
        type: String,
        required: true,
        minLength: [5, "Password should be at least 5 characters long"],
        validate: {
          validator: function(value) {
            return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{5,}$/.test(value);
          },
          message: "Password should contain at least one letter, one number, and be at least 5 characters long"
        }
      },
      
   
    role: { type: String, required: false },
  },
  { timestamps: true }
);

const User = new mongoose.model("User", userSchema);
module.exports = User;
