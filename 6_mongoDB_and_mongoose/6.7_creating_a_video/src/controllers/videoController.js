import Video from "../models/Video";

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

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;

  /*
    Mongoose Database에 data 저장하기
    - 만들어 놓은 Database schema에 맞는 데이터를 넣어랴 한다
    - schema에 정의해 놓은 것과 다른 데이터를 입력하면 
      mongoose가 정의에 맞지 않는 데이터를 제외하고 저장 하거나 
      오류를 발생 시킨다.
    
    - 사용 방법)
      - 방법 1)
        - const video = new Video({들어갈 데이터})
        - await video.save()

      - 방법 2)
        - await Video.create({들어갈 데이터})

    map
    - 배열에 들어간 데이터를 전부 수정하여 다시 넣어준다
    
    - 사용방법)
      - array.map((element) => `#{element}`)
      - array 원소들을 #을 붙여서 다시 넣어준다
    
  */

  await Video.create({
    title,
    description,
    createdAt: Date.now(),
    hashtags: hashtags.split(",").map((word) => `#${word}`),
    meta: {
      views: 0,
      rating: 0,
    },
  });

  return res.redirect("/");
};
