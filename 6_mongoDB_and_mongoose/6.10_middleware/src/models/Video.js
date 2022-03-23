import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxLength: 80 },
  description: { type: String, required: true, trim: true, minLength: 5 },
  createdAt: { type: Date, required: true, default: Date.now() },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

/*
  Mongoose Middleware
  - document에서 어떤 이벤트가 발생 하기 전, 후에 middleware를 적용 시키거나
    function을 실행 시킨다
  - Mongoose middleware는 중간에 끼어 작업을 하고 계속 흐름을 이어 나간다.
  - Middleware는 Model이 생성되기 전에 실행되어야 함
  
  - 사용방법
    - schema.pre('type', asnyc function(){})
      - videoSchema.pre('save') async function(){})
      - save type은 save되기 전에 middleware가 실행 된다
    - middleware에서 data를 사용할려면 this를 사용
      - videoSchema.pre('save') async function(){
          this.title
        })
*/
videoSchema.pre("save", async function () {
  this.hashtags = this.hashtags[0]
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
