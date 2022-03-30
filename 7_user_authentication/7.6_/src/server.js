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
    secret: "Hello",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: "mongodb://127.0.0.1:27017/youtube" }),
  })
);

app.use(localsMiddleware);
app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;
