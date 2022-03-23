import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    return res.render("home", { pageTitle: "Home", videos });
  } catch {
    return res.render("server-error");
  }
};

export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);

  if (video === null) {
    return res.render("404", { pageTitle: "Video not found" });
  }

  return res.render("watch", { pageTitle: video.title, video });
};

export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.render("404", { pageTitle: "Video not found" });
  }
  return res.render("edit", { pageTitle: `Editing`, video });
};

export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags } = req.body;
  const video = await Video.exists({ _id: id });

  if (!video) {
    return res.render("404", { pageTitle: "Video not found" });
  }
  /*
    database update
    - 방법 1)
      - const video = await Video.findById({id});
      - const { title, description, hashtags } = req.body;
      - video.title = title
        video.hash = hash
        video.save()
    
    - 방법 2)
      - const { title, description, hashtags } = req.body;
      - await Video.findByAndUpdate(id, {
          title,description,hashtags
        })
    
    exists()
    - database에 검색 결과가 있는지 확인해 주는 function
    - database에서 검색 결과를 가져오는 것이 아니라 존재 하는지
      확인하여 true, false로 반환한다.
    
    - 사용방법) 
      - Model.exists({objectElement : value})
      - Video.exists({_id: id})
      - Video Object에 _id가, param id와 같은 것을 찾는다


    startsWith()
    - 첫시작이 ()안에 지정된 문자로 시작하는지 
      확인하는 function
    - true, false로 반환됨

    - 사용방법 )
      - String.startsWith(characters)
        - word.startsWith("#")
        - 문자열 word가 "#"로 시작하는지 확인 
    
  */

  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: hashtags
      .split(",")
      .map((word) => (word.startsWith("#") ? word : `#${word}`)),
  });

  return res.redirect(`/videos/${id}`);
};

export const search = (req, res) => res.send("Search");

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = async (req, res) => {
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtags: hashtags
        .split(",")
        .map((word) => (word.startsWith("#") ? word : `#${word}`)),
    });
    return res.redirect("/");
  } catch (error) {
    console.log(error);
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};
