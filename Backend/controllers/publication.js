const Publication = require("../models/Publication.model");

exports.getAllPublications = async (req, res) => {
    try {
        const publications = await Publication.find();
        res.status(200).json({ publications: publications });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
