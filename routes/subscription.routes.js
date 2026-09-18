import { Router } from "express";
import { authorize } from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  getUserSubscriptions,
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "Get all subscriptions" });
});
subscriptionRouter.get("/:id", (req, res) => {
  res.send({ title: "Subs detail" });
});
subscriptionRouter.post("/", authorize, createSubscription);
subscriptionRouter.put("/:id", (req, res) => {
  res.send({ title: "Update subscription" });
});
subscriptionRouter.delete("/", (req, res) => {
  res.send({ title: "Delete subscription" });
});
subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);
subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "Cancel subscription" });
});
subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "Get Upcoming renewals" });
});

export default subscriptionRouter;
