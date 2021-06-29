const User = require("../models/User");

exports.login = (req, res, next) => {
    try {
        const result = User.findOne(req.body);
        if (!result) {
            res.status(400).json({
                message: "login succesfully",
                status: false,
            });
        } else {
            return res
                .status(200)
                .json({
                    data: result,
                    message: "login succesfully",
                    status: true,
                });
        }
    } catch (err) {
        res.status(400).json({ error: "error while login", details: err });
    }
};
