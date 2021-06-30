import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ResearcherProfileCard = ({ props }) => {
    return (
        <div className="profile-card">
            <div className="profile-img">
                <FaUserCircle className="profile-avatar" />
            </div>
            <div className="profile-details">
                <h3>{`Hi, ${props.firstName} ${props.lastName} Researcher`}</h3>
                <p>{props.email}</p>
            </div>
        </div>
    );
};

export default ResearcherProfileCard;
