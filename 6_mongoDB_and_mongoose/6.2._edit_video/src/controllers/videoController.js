let videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    create: "2 minutes ago",
    views: 1,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: 2,
    create: "2 minutes ago",
    views: 59,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    create: "2 minutes ago",
    views: 59,
    id: 3,
  },
];

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos: videos });
};
export const watch = (req, res) => {
  // es6사용 한 코드
  const { id } = req.params;
  // javaScript 코드
  // const id = req.params.id;

  const video = videos[id - 1];
  res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};

/*
  Method Get
  - get은 url로 request를 보낸다
  - url로 전달된 request는 req.params으로 사용 가능하다
    - a herf="path/:id"
  - form에서 request를 보낼 때 name을 이용해 보낸다
  - form에서 method get으로 보낸 request는 req.query로 data를 보낸다
  
  - 사용방법)
    - request data를 전부 사용할 땐 req.query 사용
    - request에서 일부 data를 사용할 땐 form에서 name이용해 사용
      req.query.name 
      - req.query.title
      
  Method Post
  - form에서 post로 보낸 request는 req.body로 데이터를 보낸다
  - form에서 request를 보낼 때 name을 이용해 보낸다
  
  - 사용방법)
    - 전체 request는 req.body사용
    - request에서 필요한 data만 사용할 땐
      req.body.name form에서 보낼 때 사용한
      name을 이용한다
      - const title = req.body.title
      - const {title} = req.body.title
    - req.body로 받은 값은 data type을 신뢰 하기 어려워
      유호성 검사를 하는 것이 좋음
*/
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};
export const search = (req, res) => res.send("Search");
