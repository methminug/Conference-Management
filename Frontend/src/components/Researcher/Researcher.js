import React, { useState, useEffect } from "react";
import getUserToken from "../../auth/auth";
import AddPaper from "./AddPaper";
import PublicationCard from "./ResearcherUtil/PublicationCard";
import ResearcherProfileCard from "./ResearcherUtil/ResearcherProfileCard";

const Researcher = () => {
    const [publications, setPublications] = useState([]);
    const [profile, setProfile] = useState({});

    useEffect(async () => {
        //get researcher’s all research publications
        const res = await fetch(
            `http://localhost:3000/publication/getMyPublications`,
            {
                headers: {
                    "Content-Type": "application/json",
                    authToken: getUserToken(),
                },
            }
        );
        const data = await res.json();
        setPublications(data);
        //get researcher details
        const result = await fetch(`http://localhost:3000/researcher/me`, {
            headers: {
                "Content-Type": "application/json",
                authToken: getUserToken(),
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
