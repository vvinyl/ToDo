const jwt = require("jsonwebtoken")

module.exports = function authMiddleware(req, res, nezxt){
    const authHeader = req.headers['authorization']

    if(authHeader && authHeader.startsWith("Bearer ")){
        const token = authHeader.split(" ")[1]

        jwt.verify(token, "4d56as4fa4fgsda4fg5ds64gdasdf88v4c65av4ds689fg4asdf45cx5cv488sadf4cds74fs84fa65sd74f6d7fc6sa4fd6c74f6sad7f4654fcd5as6d4DC89ASD7CC5AS41D6s74d56a4", (err, decoded) => {
            if(err){
                console.error("JWT nie przeszedł weryfikacji. ", err)
                req.userId = 0
            } else {
                req.userId = decoded.id
            }
            nezxt()
        })
    } else {
        req.userId = 0
        next()
    }
}