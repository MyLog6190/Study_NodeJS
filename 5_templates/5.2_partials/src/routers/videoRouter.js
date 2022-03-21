import express from "express";
import { see, edit, upload, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

/*
    url parmeter
    - url에서 parmeter값을 사용
    
    사용방법)
    - url에 :name을 붙이면 url에 변수값을 사용할 수 있음
      - router.get("/:a")
      - url에 변수값을 사용
      - localhost4000/123123
      - :a값이 123123
    - url parameter값을 확인도 가능
      - controller에서req.params을 사용하면 
        url parameter값을 받아올 수 있음
      - console.log(req.params)
    - router에서 url parmeter적용 할 때
      url parmeter를 나중에 사용한다.
      - router("/upload")
        router("/:id")
      - url parameter 적용된 url를 먼저 쓰면
        /upload를 parmeter값으로 인식한다
        - :id값을 /upload로 인식한다는 뜻임 
    - routing
      - url parameter값을 원하는 값으로 제한 하기 위해 사용
      - 정규식이라고 이해하며 됨
      - router.get("/:id(정규식)")
*/

videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;
