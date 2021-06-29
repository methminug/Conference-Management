const User = require("../models/User");

exports.attendeesCount = (req, res) => {
    try {
        const attendeeCount = User.countDocuments({
            userType: "Attendee",
        });

        res.json(attendeeCount);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.researchersCount = (req, res) => {
    try {
        const researcherCount = User.countDocuments({ userType: "Researcher" });
        res.json(researcherCount);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.presentersCount = (req, res) => {
    try {
        const presentersCount = User.countDocuments({ userType: "Presenter" });
        res.json(presentersCount);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
