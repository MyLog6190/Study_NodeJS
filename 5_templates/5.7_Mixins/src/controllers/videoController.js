export const trending = (req, res) => {
  const videos = [
    {
      title: "First Video",
      rating: 5,
      comments: 2,
      create: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Second Video",
      rating: 5,
      comments: 2,
      create: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Third Video",
      rating: 5,
      comments: 2,
      create: "2 minutes ago",
      views: 59,
      id: 1,
    },
  ];
  return res.render("home", { pageTitle: "Home", videos: videos });
};
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const upload = (req, res) => res.send("Upload");
export const search = (req, res) => res.send("Search");
export const deleteVideo = (req, res) => res.send("Delete Video");
