import jwt from "jsonwebtoken";

const requireAuth = (req, res, next) => {
  const token = req.body.token;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, data) => {
      if (err) {
        res.redirect("/api/login");
      } else {
        console.log(data);
        next();
      }
    });
  } else {
    res.redirect("/api/login");
  }
};
export default requireAuth;
