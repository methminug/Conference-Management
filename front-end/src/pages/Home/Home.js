import React from "react";
import styles from "./Home.module.scss"
import {SpeakerSection, SessionSection, TrackInfoHeaderSection, ConferenceDownloadsSection} from "../../components";

const Home = () => {
    return(
        <div>
            <TrackInfoHeaderSection trackName="JavaScript" trackDate="12th December 2021" />
            <SpeakerSection />
            <SessionSection />
            <ConferenceDownloadsSection />
        </div>
    )
};

export default Home;
