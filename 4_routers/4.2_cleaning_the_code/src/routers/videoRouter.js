import express from "express";

const handleWatchVideo = (req, res) => res.send("Watch Video");

const videoRouter = express.Router();

videoRouter.get("/watch", handleWatchVideo);

export default videoRouter;
