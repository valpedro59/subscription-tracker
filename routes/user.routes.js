import { Router } from "express";
import { authorize } from "../middlewares/auth.middleware.js";
import { getUser, getUsers } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", authorize, getUser);
userRouter.post("/", (req, res) => {
  res.send({ title: "Post user" });
});
userRouter.put("/:id", (req, res) => {
  res.send({ title: "Put user" });
});
userRouter.delete("/", (req, res) => {
  res.send({ title: "Delete user" });
});

export default userRouter;
