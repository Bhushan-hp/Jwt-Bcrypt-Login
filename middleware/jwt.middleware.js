const jwt = require("jsonwebtoken");

module.exports = {
    checkToken: (req, res, next) => {
        let token = req.headers.token;
        if (token) {
            jwt.verify(token, "secretKey", (err, decoded) => {
                if (err) {
                    res.send({ error: true, message: "UnAuthorized User" });
                } else {
                    req.user = decoded;
                    next();
                }
            })
        } else {
            res.send({ error: true, message: "Token not Found" });
        }
    }
}