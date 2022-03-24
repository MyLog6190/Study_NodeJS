// server에 mongo를 import하면 mongo가 server에 바로 연결 된다

import express from "express";
import morgan from "morgan";
import session from "express-session";
import rootRouter from "./routers/rootRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(logger);

app.use(express.urlencoded({ extended: true }));

/*
    session
    - https://www.npmjs.com/package/express-session
    - npm home page에서 express-session을 검색하여 다운코드를 입력
      - npm i express-session
    - session은 router가 실행되기 전에 사용한다.
    - session을 session 알아서 벡엔드 쿠키로 보내도록 되어있음
      - session data를 cookie에 넣어준다
      - cookie는 request header에 들어가 있다.      
    - session안에 data를 넣어 줄 수 있다.
    - session은 sever가 재시작 되면 초기화 된다.
*/

// 방문한 web site에 session middleware가 있으면
// express가 알아서 session id를 만들고 browser에세 보내준다.
// browser에서 session id를 cookie에 저장하고
// express에서도 session id을 session db에 저장하여
// session db에 id와 cookie에 저장한 id가 같도록 해준다
// browser가 url요청을 보낼 때마다 session id요청도 함께 보내준다
app.use(
  session({
    secret: "Hello",
    resave: true,
    saveUninitialized: true,
  })
);

app.use((req, res, next) => {
  req.sessionStore.all((error, sessions) => {
    // session data를 확인 할 수있다.
    console.log(sessions);
    next();
  });
});

app.get("/add-one", (req, res, next) => {
  req.session.potato += 1;
  return res.send(`${req.session.id}\n${req.session.potato}`);
});

app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;
