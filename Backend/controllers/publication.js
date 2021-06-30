const Publication = require("../models/Publication.model");

exports.getAllPublications = async (req, res) => {
    try {
        const publications = await Publication.find();
        res.status(200).json({ publications: publications });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
exports.getResearcherPublications = async (req, res) => {
    try {
        const researcherPublications = await Publication.find({
            researcher: req.userId,
        });
        res.status(200).json(researcherPublications);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
