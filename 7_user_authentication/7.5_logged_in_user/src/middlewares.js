export const localsMiddleware = (req, res, next) => {
  /*
    locals
    - response.locals에 data를 넣으면
      모든 template(pug)와 공유가 가능하다
    - request.session data를 res.locals에
      넣으면 session data를 모든 template와 공유 가능하다
  */
  res.locals.siteName = "Youtube";
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.loggedInUser = req.session.user;
  console.log(res.locals);
  next();
};
