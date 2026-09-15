import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User Name is required"],
      trim: true,
      minLength: 2,
      maxLength: 50,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please fill a valid email address"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minLength: 8,
      maxLength: 20,
    },
  },
  { timestamps: true },
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {
    return error;
  }
});

userSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};
/* Le hash bcrypt fait 60 caractères. Comme Mongoose ne valide que les champs modifiés, ça ne pose pas de problème en normal flow (le hash est écrit après validation). Mais si tu fais un findOneAndUpdate avec le hash directement, ça échouera. Pense à ajouter un middleware pre("findOneAndUpdate") si tu utilises cette méthode pour les updates de password
 */
export const User = mongoose.model("User", userSchema);
