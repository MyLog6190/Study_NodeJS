import mongoose from "mongoose";

/*
    model
    - 데이터가 어떤 형태로 구성 될지 정의 
    - 구성된 데이터 형식을 schema라고 부흠
    - 다른 data base의 table 역할을 함

    - 사용 방법)
      - 사용 할 modle 선언 new mongoose.Schema({})
        - const videoSchema = new mongoose.Schema({})
      - ({})안에 사용할 data를 정한다.
        data name과 data type 등을 정함
        - new mongoose.Schema({title: String, meta: {views: Number}})
      - 작성한 모델은 mongose.medel() agument로 넣는다
        - 첫 번째 agument는 model name
        - 두 번째 agument는 schema 
        - const video = mongose.model("video", videoShema)
});
*/
const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

const Video = mongoose.model("Video", videoSchema);
export default Video;
