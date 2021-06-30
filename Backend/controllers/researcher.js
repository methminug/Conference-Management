const User = require("../models/User");

exports.getResearcherDetails = async (request, response) => {
    try {
        const { firstName, lastName, email } = await User.findById(
            request.userId
        );
        const researcherDetails = { firstName, lastName, email };

        response.status(200).json({ researcher: researcherDetails });
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
};
