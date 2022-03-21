import express from "express";

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");

globalRouter.get("/", handleHome);

/*
    export
    - 프로젝트에 있는 모든 파일은 분리된 모듈이기 때문에
      밖에서 공유할려면  export해야함
 */
export default globalRouter;
