const {prisma} = require('../config/prisma');
const auth = require('../services/auth.services');
const createError = require('http-errors');
class authController {
    static register = async (req, res, next) => {
        //const {user} = req.body;
        try {
            const user = await auth.register(req.body);
            // await prisma.user.create({
            //     data: {
            //         user
            //     }
            // });
            res.status(201).json({
                status: true,
                message: 'User created successfully',
                data: user
            })
        }
        catch (e) {
            next(createError(400, e.message))
        }
    }
    static login = async (req, res, next) => {
        try {
            const data = await auth.login(req.body)
            res.status(200).json({
                status: true,
                message: "Account login successful",
                data
            })
        } catch (e) {
            next(createError(400, e.message))
        }
    }
    static all = async (req, res, next) => {
        try {
            const users = await auth.all();
            res.status(200).json({
                status: true,
                message: 'All users',
                data: users
            })
        }
        catch (e) {
            next(createError(e.statusCode, e.message))
        }
    }
}
module.exports = authController;