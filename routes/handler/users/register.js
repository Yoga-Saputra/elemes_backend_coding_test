const bcrypt = require('bcrypt')
const { User } = require('../../../models')
const Validator = require('fastest-validator')
const v = new Validator()

module.exports = async (req, res) => {
    // schema validation
    const schema = {
        name: 'string|empty:false',
        password: 'string|min:6',
    }
    const validate = v.validate(req.body, schema)
    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        })
    }
    const password = await bcrypt.hash(req.body.password, 10)

    const data = {
        password,
        name: req.body.name,
        // auto set role user when register
        role: 'user'
    }

    const createUser = await User.create(data)

    return res.json({
        status: 'succes',
        data: createUser
    })
}