import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddPaper from "./AddPaper";
import "../../pages/Researcher";
import PublicationCard from "./ResearcherUtil/PublicationCard";
import ResearcherProfileCard from "./ResearcherUtil/ResearcherProfileCard";

const Researcher = () => {
    const [publications, setPublications] = useState([]);
    const [profile, setProfile] = useState({});

    useEffect(async () => {
        const res = await fetch(`http://localhost:3000/publication/my`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        setPublications(data);

        const result = await fetch(`http://localhost:3000/researcher/my`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        const profile = await result.json();
        setProfile(profile.researcher);
    }, []);

    return (
        <div className="researcher-profile">
            <div className="profile-container">
                <ResearcherProfileCard profile={profile} />
                Add new Publication
                <AddPaper />
            </div>
            <h1>Your Publications</h1>
            <div className="publications">
                {publications.map((publication) => {
                    return (
                        <PublicationCard
                            publication={publication}
                            key={publication._id}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Researcher;