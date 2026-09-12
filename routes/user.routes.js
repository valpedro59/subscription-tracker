import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({ title: "Get All" });
});
userRouter.get("/:id", (req, res) => {
  res.send({ title: "Get one user" });
});
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
