import express from "express";
import morgan from "morgan";
/*
  Morgan
  - morgan은 get, path, status code, 응답시간 정보를 가지고 있음

  - 다운방법)
  - https://www.npmjs.com/package/morgan
  - npm 홈페이지에서 morgan 검색
  - terminal창에 morgan 다운코드 입력
    - npm i morgan
  - repository에 github에 들어가면 source code도 볼 수 있음
    - https://github.com/expressjs/morgan

  - 사용방법)
  - node_module에 설치 되어있는 morgan를 import한다
    - import morgan from "morgan";
  - morgan() agumnet에 5기능 중에 한가지를 넣어준다
    - const logger = morgan("dev"); 
  
  - 
*/
const PORT = 4000;

const app = express();
const logger = morgan("dev");

const handleHome = (req, res) => {
  return res.send("I love Middleware");
};

const login = (req, res) => {
  return res.send("login");
};

app.use(logger);
app.get("/", handleHome);
app.get("/login", login);

const handleListening = () =>
  console.log(`Server listenting on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
