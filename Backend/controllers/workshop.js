const Workshop = require("../models/Workshop.model");

exports.getAllWorkshops = async (req, res) => {
    try {
        const workshops = await Workshop.find();
        res.status(200).json({ workshops: workshops });
    } catch (error) {
        res.status(404), json({ message: error.message });
    }
};
