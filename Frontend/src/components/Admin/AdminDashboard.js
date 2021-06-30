import React, { useEffect, useState } from "react";
import Count from "./AdminUtil/CountCart";
import Barchart from "./Barchart";
import Table from "./Table";
import "../AdminUtil/style/admin.css";
import ContentToPublish from "./ContentToPublish";

const AdminDashboard = () => {
    const [aCount, setACount] = useState(0);
    const [rCount, setRCount] = useState(0);
    const [pCount, setPCount] = useState(0);
    const [researchPapers, setresearchPapers] = useState([]);
    const [workshopPapers, setworkshopPapers] = useState([]);

    useEffect(() => {
        const resAttendee = fetch(`http://localhost:3000/admin/attendeeCount`);
        const attendeeData = resAttendee.text();

        const resResearcher = fetch(
            `http://localhost:3000/admin/researchersCount`
        );
        const researcherData = resResearcher.text();

        const resPresenter = fetch(
            `http://localhost:3000/admin/presentersCount`
        );
        const presenterData = resPresenter.text();

        const resResearchpapers = fetch(
            `http://localhost:3000/publication/getAllPublications`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const Researchpaper = resResearchpapers.json();

        const resWorkshoppapers = fetch(
            `http://localhost:3000/workshop/getAllWorkshops`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const Workshoppaper = resWorkshoppapers.json();

        setresearchPapers(Researchpaper.publications);
        setworkshopPapers(Workshoppaper.workshops);

        if (presenterData != null) {
            setACount(attendeeData);
            setRCount(researcherData);
            setPCount(presenterData);
        }
    }, []);

    return (
        <div style={{ marginBottom: "100px" }}>
            <Count attendee={aCount} researcher={rCount} presenter={pCount} />
            <Barchart
                ResearchPapers={researchPapers}
                WorkshopPapers={workshopPapers}
            />
            <div className="researchTable">
                <Table
                    Tablecontent={researchPapers}
                    topic={"Research Papers Details"}
                />
            </div>
            <div className="workshopsTable">
                <Table
                    Tablecontent={workshopPapers}
                    topic={"Workshops Details"}
                />
            </div>
            <ContentToPublish />
        </div>
    );
};

export default AdminDashboard;
