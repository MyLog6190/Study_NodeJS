import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

/*
  pug
  - pug는 file를 랜더링해서 html file로 변환 시켜 준다
  
  - 사용방법)
    - npm에서 package pug를 검색 후
    - 다운 코드를 terminal창에 입력
      - npm i pug
    - express에서 pug를 사용할려면
      view engine을 pug로 설정하면 됨
    - app.set("view engine", "pug"); 
    
    views
    - view engine 설정한 것은 views file에서
      찾도록 설정 되어있음
    - views file에서 pug file을 만들고
      res.render(pugFileName)을 사용하면
      views pug file을 rendering하여 
      html file로 변환 시킨다
    - express가 읽어오는 views file경로는
      현재 작업 directory에서 /views 이다
      - youtube/views
    - 현재 작업 directory는 process.cwd()로 확인 가능함
      현재 작업 directory는 node.js가 실행되는 folder를 말함
      - console.log(process.cwd())
    - views의 읽어오는 경로를 바꾸고 싶다면
      - app.set("views", process.cwd() + "경로")
      - app.set("views", process.cwd() + "/src/views")

  
*/

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(logger);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`Server listenting on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
