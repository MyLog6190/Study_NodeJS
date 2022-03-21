import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(logger);

/*
  urlencoded
  - express에 내장된 middleware 기능
  - express가 form의 data를 이해 할 수 있도록 도와줌
  
  - 사용방법)
    - express.urlencoded({option})
      - app.use(express.urlencoded({extended:true}))
    - urlencoded의 option 중에 extended는 body에 있는 정보를
      보기 좋은 형식으로 바꿔주는 역활을 함
    
*/
app.use(express.urlencoded({ extended: true }));

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`Server listenting on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
