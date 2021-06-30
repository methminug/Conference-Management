import React from "react";
import "./style/count.css";
import attendeeImage from "url:../../assets/img/attendee.png";
import researcherImage from "url:../../assets/img/researcher.png";
import presenterImage from "url:../../assets/img/presenter.png";

const CountCard = (props) => {
    return (
        <div>
            <div className="squire">
                <h2 className="h1_c">Presernter</h2>
                <label className="labele_c">{props.presenter}</label>
                <img className="presenterImg" src={presenterImage} alt="img" />
            </div>
            <div className="squire">
                <h2 className="h1_c">Resercher</h2>
                <label className="labele_c">{props.researcher}</label>
                <img
                    className="researcherImg"
                    src={researcherImage}
                    alt="img"
                />
            </div>
            <div className="squire">
                <h2 className="h1_c">Attendee</h2>
                <label className="labele_c">{props.attendee}</label>
                <img className="atendeeImg" src={attendeeImage} alt="img" />
            </div>
        </div>
    );
};

export default CountCard;
