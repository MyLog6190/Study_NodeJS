import Video from "../models/Video";

/*
  Async Await
  - await를 사용하면 database에서 결과 값을 바로 받을 수 있다
    - const videos = await Video.find({})
  - error를 처리 할 때는 try - catch를 사용한다 
  - callback를 사용할 경우 코드 실행이 순서가 늦게 처리되지만
    async await는 코드 실행이 순차적으로 실행된다
  - await는 function안에서만 사용가능하고 function이 
    asynchronous이여만 한다.
  
  - 사용방법
    - await를 사용할 function에 async를 붙인다
      - async () => {}
    - await는 function 안에서만 사용라고 await 뒤에
      사용할 db model이름과 필요한 function을 기술
      - async () => {await Video.find({})}
*/
export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    return res.render("home", { pageTitle: "Home", videos });
  } catch {
    return res.render("server-error");
  }
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
