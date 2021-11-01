const jwt = require('jsonwebtoken')
const { JWT_SECRET } = process.env

module.exports = async (req, res, next) => {
  const token = req.headers.authorization
  // verify token
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        message: err.message
      })
    }

    // inject token to every request when use this middleware
    req.user = decoded
    return next()
  })
}