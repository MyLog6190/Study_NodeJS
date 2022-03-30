import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(logger);

app.use(express.urlencoded({ extended: true }));

/*
  connect-mongo
  - session을 mongodb에 저장해 준다
  
  - 설치 방법)
    - https://www.npmjs.com/package/connect-mongo
    - npm i connect-mongo
  
  - 사용방법)
    - session middleware에 store를 추가하여 사용
    - session({store: MongoStore.create({mongoUrl: "mongodb:..."})})
*/
app.use(
  session({
    /*
      secret
      - cookie에 sign할 때 사용하는 string
      - cookie에 sign하는 이유 
        - backend가 cookie를 줬다는걸 보여 주기 위해
        - session hijack 공격 방지
          - session hijack는 내 cookie를 
            훔쳐 사칭 할 수있음
      - secret은 길고 무작위로 작성하여하함
    */
    secret: process.env.COOKIE_SECRET,
    resave: false,
    /*
      Uninitialized
      - session이 새로 만들어지고 수정된 적이 없을 때 uninitialized라고 함
      - saveUninitialized: true는 session이 수정되지 않아도 전부 저장한다.
        - web site에 접속만 하더라도 cookie에 session id가 저장됨
      - session에 수정 될 때만 저장하고 싶다면 saveUninitalized: false을 주면 된다.
        - ex) 로그인하여 session에 user정보를 넣어서 session이 수정되면 저장한다.
    */
    saveUninitialized: false,

    /* */
    cookie: {
      maxAge: 20000,
    },
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);

app.use(localsMiddleware);
app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;
