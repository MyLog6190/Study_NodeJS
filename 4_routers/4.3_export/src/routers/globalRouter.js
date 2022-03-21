import express from "express";
import { join } from "../controllers/userController";
import { trending } from "../controllers/videoController";

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");

globalRouter.get("/", trending);
globalRouter.get("/join", join);

/*
    export
    - 프로젝트에 있는 모든 파일은 분리된 모듈이기 때문에
      외부에서 공유하기 위해 export를 사용
    
    - 사용 방법)
      - export
        - export를 하게 되면 import할 때 변수이름 그대로 사용 해야 한다.
          - export const join = () => {}
          - import {join} from "../controller"
      - export default
        - export default는 file이 1개 뿐이서 
          import할 때 원하는 이름으로 import할 수 있음
          - export default globalRouter
          - import global from "../controller"
        - 
 */
export default globalRouter;
