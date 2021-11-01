const bcrypt = require('bcrypt')
const { User } = require('../../../models')
const Validator = require('fastest-validator')
const v = new Validator();
const jwt = require('jsonwebtoken')
const {
    JWT_SECRET,
    JWT_ACCESS_TOKEN_EXPIRED,
} = process.env

module.exports = async (req, res) => {
    // schema validation
    const schema = {
        name: 'string',
        password: 'string|min:6'
    }

    const validate = v.validate(req.body, schema)
    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        })
    }

    const user = await User.findOne({
        where: { name: req.body.name }
    })

    if (!user) {
        return res.status(404).json({
            status: 'error',
            message: 'user not found'
        })
    }
    const isValidPassword = await bcrypt.compare(req.body.password, user.password)
    if (!isValidPassword) {
        return res.status(404).json({
            status: 'error',
            message: 'user not found'
        })
    }

    const token = jwt.sign({ user }, JWT_SECRET, { expiresIn: JWT_ACCESS_TOKEN_EXPIRED })
    res.json({
        status: 'success',
        data: {
            token,
        }
    })

}