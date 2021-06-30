const User = require("../models/User");
const NoticePost = require("../models/NoticePost");

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

exports.getPendingNotice = (req, res) => {
    try {
        const pendingnotice = NoticePost.find({
            isApproved: "Pending",
        });
        res.json(pendingnotice);
    } catch (err) {
        res.status(500).json({ massage: err.message });
    }
};

exports.toApproveNotice = (req, res) => {
    try {
        NoticePost.findByIdAndUpdate(req.params.id, {
            isApproved: "Approved",
        }).then((result) => {
            res.status(200).json({ message: "Notice Successfully Approved" });
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.toRejectNotice = (req, res) => {
    try {
        NoticePost.findByIdAndUpdate(req.params.id, {
            isApproved: "Rejected",
        }).then((result) => {
            res.status(200).json({ message: "Notice Successfully Rejected" });
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
