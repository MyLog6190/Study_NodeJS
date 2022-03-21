import express from "express";

const userRouter = express.Router();

const handleEditer = (req, res) => res.send("Edit User");

userRouter.get("/edit", handleEditer);

export default userRouter;
