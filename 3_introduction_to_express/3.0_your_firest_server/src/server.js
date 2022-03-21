/*
    express
    - 설치한 express를 import하여 사용
    
    - 사용방법
      - import express from "express"; 
        - import express from "express"라고 입력하면
        - npm이 node_modules express를 알아서 찾아준다 
      - import express from "node_modules/express"
        - npm이 express만 입력해도 찾아 주기 떄문에
        - 이렇게 입력 하지 않아도 된다
*/
import express from "express";

/* 
    express()
    - express import하고
    - express(); 입력하면 
      express application을 생성
*/

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
    listen()
    - express application에
    - listen() 함수를 사용하면 server를 실행 시킬수 있음
    - listen() 첫 번째 agument는 port
    - 두 번째 agument는 callback 함수를 넣는다.
    - 사용 방법
      - app.listen(4000, handle);
        - 4000은 port 번호, handle은 실행 함수

    port
    - 웹 서버와 웹 클라이언트 간에 정보를 교환에 사용되는
      네트워크 연결의 논리적 끝점
    - port에는 개별적으로 식별하도록 고유 번호가 할당 됨

    callback
    - listen() 2 번째 agument에 입력함
    - 기본적으로 server가 실행 될 때 작동하는 함수
*/

const PORT = 4000;
const handleListening = () =>
  console.log(`Server listenting on port http://localhost${PORT}`);

app.listen(PORT, handleListening);
