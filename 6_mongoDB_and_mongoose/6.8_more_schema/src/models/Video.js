import mongoose from "mongoose";

/*
  required
  - data값을 필수로 받아야 할 때 사용
  - required: true
  
  default
  - data가 들어오지 않아도 기본 값으로 
    data값을 지정할 때 사용
  - default: value

  trim 
  - data에 양 옆의 공백을 지워준다
  - trim: true
  - 입력 값: "   11   " -> trim 적용 후 "11"

  minLength
  - 최소 글자 수를 정한다
  - minLength: true

  maxLength
  - 최대 글자 수를 정한다
  - maxLength: number
  
*/
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

const Video = mongoose.model("Video", videoSchema);
export default Video;
