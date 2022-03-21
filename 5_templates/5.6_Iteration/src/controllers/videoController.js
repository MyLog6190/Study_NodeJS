export const trending = (req, res) => {
  const videos = [
    { title: "Hello" },
    { title: "Video #2" },
    { title: "Whatsup" },
  ];
  return res.render("home", { pageTitle: "Home", videos: videos });
};
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const upload = (req, res) => res.send("Upload");
export const search = (req, res) => res.send("Search");
export const deleteVideo = (req, res) => res.send("Delete Video");