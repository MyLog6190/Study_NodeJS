import express from "express";
import { watch, getEdit, postEdit } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
/*
  get
  - get method로 받아온 request는
    router.get으로 사용
    - videoRouter.get()
  post
  - post method로 받아온 request는
    router.post로 사용
    - videoRouter.post()
*/
/*
  route function을 사용하면 get, post한번에 사용가능
  router.route("/path").get().post()
  videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit))
*/
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
export default videoRouter;
