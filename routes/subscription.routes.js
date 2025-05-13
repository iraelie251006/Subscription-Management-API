import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription, getAllSubscriptions, getUserSubscriptions } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", getAllSubscriptions);

subscriptionRouter.get("/:id", authorize, getUserSubscriptions);

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.put("/:id", (req, res) => res.send({title: 'UPDATE subscription'}));

subscriptionRouter.delete("/:id", (req, res) => res.send({title: 'DELETE subscription'}));

subscriptionRouter.get("/user/:id", (req, res) => res.send({title: 'GET all subscriptions for user'}));

subscriptionRouter.put("/:id/cancel", (req, res) => res.send({title: 'CANCEL subscription'}));

subscriptionRouter.get("/upcoming-renewals", (req, res) => res.send({title: 'GET upcoming renewals'}));

export default subscriptionRouter;