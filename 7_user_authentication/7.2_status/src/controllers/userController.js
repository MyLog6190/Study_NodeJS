import User from "../models/User";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
  const { name, username, email, password, password2, location } = req.body;
  const pageTitle = "JOIN";

  /*
    HTTP Status
    - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    - respones에 status를 붙여 response 응답상태를 browser에게 보내준다.
    - 오류 startus를 보내주면 browser가 cookie나 history에 정보 저장을 하지 않는다.

    - 사용 방법)
      - respones.status(status code)
        - res.status(404)
        - 404 코드는 잘못된 request요구에 발생하는 코드 
  */

  if (password !== password2) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "Password confirmation does not match",
    });
  }

  const exists = await User.exists({ $or: [{ username }, { email }] });
  if (exists) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "This username/email is already taken",
    });
  }

  await User.create({
    name,
    username,
    email,
    password,
    location,
  });
  res.redirect("/login");
};

export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("Remove User");
export const login = (req, res) => res.send("Log In");
export const logout = (req, res) => res.send("Log Out");
export const see = (req, res) => res.send("See");
