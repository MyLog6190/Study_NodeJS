/*
    render
    - render views file을 hrml로 변경 시킨다. 
    - render 2가지 agument를 받는다
      - 1번 agument는 views file이고
      - 2번 agument는 variable를 views에 보내준다.
    - render에서 variable을 보내는 방법
      - {}안에 variable이름 : variabla 값을 넣어 보내준다
      - res.render("home", {title: "home"})
*/
export const trending = (req, res) => res.render("home", { pageTitle: "Home" });
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const upload = (req, res) => res.send("Upload");
export const search = (req, res) => res.send("Search");
export const deleteVideo = (req, res) => res.send("Delete Video");
