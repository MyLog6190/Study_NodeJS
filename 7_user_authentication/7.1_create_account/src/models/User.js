import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { isValidObjectId } from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  location: { type: String },
});

/*
bcrypt
- https://www.npmjs.com/package/bcrypt 
- 입력된 문자열을 해싱을 통해 암호화
- 해싱은 일방향 함수
  - 입력값을 해싱하면 항상 같은 출력값이 생성 
  - 입력값 해싱된 출력값은 입력값으로 되돌릴 수 없음

- 사용방법)
  - bycrpt.hash(myPlaintextPassword, saltRounds, function(err, hash))
    - myPlainTextPassword : 해싱하고 싶은 문자열
    - saltRounds : 해싱할 횟수
  - ex) await bcryt.hash(password, 5);

schema.pre("save", anync function()){}
- pre("save")는 schema를 mongodb에 저장하기 전에 실행
- 2번 째 argument는 
*/
userSchema.pre("save", async function () {
  console.log("Users password:", this.password);
  this.password = await bcrypt.hash(this.password, 5);
  console.log("Hashed password", this.password);
});

const User = mongoose.model("User", userSchema);

export default User;
