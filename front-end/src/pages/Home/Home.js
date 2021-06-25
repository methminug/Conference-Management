import React from "react";
import styles from "./Home.module.scss"
import {SpeakerCard, Sessioncard, TrackInfoHeaderSection} from "../../components";

const Home = () => {
    return(
        <div>
            <TrackInfoHeaderSection trackName="JavaScript" trackDate="12th December 2021" />
            <SpeakerCard />
            <Sessioncard />
        </div>
    )
};

export default Home;
