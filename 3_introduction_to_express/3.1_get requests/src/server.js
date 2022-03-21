import express from "express";
/*
    sever
    - server 항상 켜져있고, 인터넷에 연결 되있는 컴퓨터
    - request를 받으면 그 request를 listening 한다.
    - sever를 종료시키도 싶다면 terminal창에 ctrl + c를 입력

*/

/*
    request
    - 사용자 요청 사항
    - 메세지 보내기, 클릭, 로그인 다 request
    - url에 google.com을 입력하면
      사용자가 browser에게 google.com이라는 
      request 보낸 것이라 생각하면 됨
*/
const app = express();
/*
    http
    - 서버의 연결 방법
    - browser에 url를 입력하면 browser가 http request를 만들어 준다

    http request
    - web site에 접속하고 sever에 정보를 보내는 방법
    - web site에 접속할 때 우리가 그 web site에 가는 것이 아니라
      browser가 web site를 request하고 web page을 가져온다
    
    get
    - get은 http method중의 하나
    - web page를 request할 때 사용
*/
const PORT = 4000;
/*
    get()
    - express application에 get() 사용하면
    - get request에 대한 respones할 수 있다.
    - get() 1 번째 agumnet에는 request 조건
      get() 2 번째 agument에는 request가 들어 왔을 때
      callback function를 입력
    
    - 사용방법
      - app.get("/", handleHome);
        - "/"에 대한 request가 왔을 때 
        - handleHome function을 respones 한다
        - callback은 반드시 funcion으로 보내야 한다
*/

const handleHome = () => console.log("Somebody is trying to go home");

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Server listenting on port http://localhost${PORT}`);

app.listen(PORT, handleListening);
