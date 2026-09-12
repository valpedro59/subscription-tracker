import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "Get all subscriptions" });
});
subscriptionRouter.get("/:id", (req, res) => {
  res.send({ title: "Subs detail" });
});
subscriptionRouter.post("/", (req, res) => {
  res.send({ title: "Post subscription" });
});
subscriptionRouter.put("/:id", (req, res) => {
  res.send({ title: "Update subscription" });
});
subscriptionRouter.delete("/", (req, res) => {
  res.send({ title: "Delete subscription" });
});
subscriptionRouter.get("/user/:id", (req, res) => {
  res.send({ title: "Get user subscription " });
});
subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "Cancel subscription" });
});
subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "Get Upcoming renewals" });
});

export default subscriptionRouter;
