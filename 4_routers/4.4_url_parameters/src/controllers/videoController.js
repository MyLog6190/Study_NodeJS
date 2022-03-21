export const trending = (req, res) => res.send("Home Page Video");
export const see = (req, res) => {
  console.log(req.params);
  return res.send(`Watch Video #${req.param.id}`);
};
export const edit = (req, res) => res.send("Edit");
export const upload = (req, res) => res.send("Upload");
export const search = (req, res) => res.send("Search");
export const deleteVideo = (req, res) => res.send("Delete Video");
