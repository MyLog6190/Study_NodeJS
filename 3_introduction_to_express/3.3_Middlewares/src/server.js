import express from "express";

const app = express();

const PORT = 4000;

/*
  Middeleware
  - middelware는 request와 respones 사이에 있다
  - middelware는 handler라고 생각하면 되고
    handler는 mvc에서 controller이다

  next()
  - controller 3 번쩨 agument는 next받는다
  - next는 app.get() controller 다음 function을 호출한다.
  - 사용 방법
    - app.get("/", gossipMiddleware, handleHome);
    - const gossipMiddleware = (req, res, next) => {
        console.log("I'm in the middle");
        next();
      }
    - const handleHome = (req, res) => {
        return res.end();
      };
  - gossipdlleware next(); -> handleHome 실행
  
  use()
  - use()를 사용하면 모든 route에서 함수를 사용한다
  - 사용 방법
    - handle1함수에서 next()를 사용하면
    - app.use(handle1);
      app.get("/", handle2);
      app.get("/protected", handle3);
    
    - 위 코드랑 아래의 코드랑 같음
      app.get("/", handle1, handle2);
      app.get("/protected", handle1, handle3);    
};
  
*/
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed, you may continue");
  next();
};

const handleHome = (req, res) => {
  return res.send("I love Middleware");
};

const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounge");
};

app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/protected", handleProtected);

const handleListening = () =>
  console.log(`Server listenting on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
