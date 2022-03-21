import express from "express";
import morgan from "morgan";
/*
  router
  - router는 url관리를 할 때 사룔한다 
  - router를 사용하면 controller와 URL관리를 쉽게 해준다.
  
  - 사용방법)
    - router 생성
      - const videoRouter = express.Reouter();
    - 생성한 router를 use에 적용 
      - app.use("/videos", viseoRouter);
    - 생성한 router에 .get을 사용하여
      url이름과, 실행 함수를 agument에 넣는다. 
      - videoRouter.get("/watch", function);
    - 생성한 router안에 .get으로 추가한 url이 적용됨
      - url이 videos일 때 사용되는 videoRouter
      - videoRouter에거 사용되는 url watch
      - url이 /video/watch로 만들어짐
     
*/
const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");

globalRouter.get("/", handleHome);

const userRouter = express.Router();

const handleEditer = (req, res) => res.send("Edit User");

userRouter.get("/edit", handleEditer);

const videoRouter = express.Router();

const handleWatchVideo = (req, res) => res.send("Watch Video");

videoRouter.get("/watch", handleWatchVideo);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`Server listenting on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
