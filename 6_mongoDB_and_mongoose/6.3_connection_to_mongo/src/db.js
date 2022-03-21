import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/youtube", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = () => {
  console.log("DB Error", error);
};

// on은 event를 여러 번 발생시킬 수 있음
// error이벤트가 발생하면 계속 실행
db.on("error", handleError);

// once event를 한 번만 실행
// open은 database가 연결 될 때 발생
// open 이벤트가 발생하면 한 번만 실행
db.once("open", handleOpen);
