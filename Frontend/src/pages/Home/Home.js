import React from "react";
import styles from "./Home.module.scss"
import {SpeakerCard} from "../../components";
import {Sessioncard} from "../../components";

const Home = () => {
    return(
        <div>
            <SpeakerCard />
            <Sessioncard />
        </div>
    )
};

export default Home;
