import Video from "../models/Video";

export const home = (req, res) => {
  /*
    Callback
    - 무언가 실행되면 그 다음으로 실행되는 것
    - app.listen(PORT, function)
      - app.listen(PORT)가 먼저 발생 되면
        다음으로 fucntion이 실행됨

    Database 에서 data 받아오는 방법
    - database에서 data를 받아오는 방법은 (callback, promise)이 있다
    
    - Callback
      - callback을 통해 data를 받아온다
      - Video.find({}, callback(error, videos)) => {console.log(videos)})
        - {}는 자료 전체를 의미한다.
        - 실행 순서 {} -> database -> callback(error, video)
          - Video.find({}, callback(error, videos))에서 {}을 database에 전송한다.
          - 전송된 데이터를 통해 database에서 검색된 data는 callback function agument로 보낸다
            Video.find({}, callback(error, videos) => {console.log(videos)})
            error에러 발생시 에러 메세지, videos는 database에서 받아온 data
          - callback function을 실행시킨다 
            console.log(videos)가 실행

    function home 실행 순서
    - console.log("hello") -> Video.find({}. callback() => {})
      - database가 javascript밖에서 실행 되기 때문에 Video.find()이
        나중에 실행 된다

    - ex)
      - callback함수가 return res.render보다 늦게 실행되어 rendering이 먼저 된 후
        callback이 실행된다.
        - home{ 
            Video({}, callback(error, video)=>{}); 
            return render("", video) -> 먼저 실행
          }

    - callback function 안에 return을 넣어주면 rendering이 마지막으로 실행 됨
        home{
          Video.find({}, (error, videos) => {
            return res.render("home", { pageTitle: "Home", videos: [] });
          });
        }    
  */
  Video.find({}, (error, videos) => {
    return res.render("home", { pageTitle: "Home", videos: [] });
  });

  console.log("hello");
};
export const watch = (req, res) => {
  const { id } = req.params;
  res.render("watch", { pageTitle: `Watching` });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Editing` });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};
export const search = (req, res) => res.send("Search");

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  return res.redirect("/");
};
