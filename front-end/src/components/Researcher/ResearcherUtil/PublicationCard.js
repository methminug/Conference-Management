import React from "react";
import { Link } from "react-router-dom";

const PublicationCard = (props) => {
    return (
        <div className="item-card">
            <div className="item-text-content">
                <h2>{props.title}</h2>
                <p>
                    {`Payment Status - ${
                        !props.paymentMade ? "Not Paid" : "Paid"
                    }`}
                </p>
                <p>
                    Approval Status - <span>{props.isApproved}</span>
                </p>
                <p className="light">
                    Submitted on - {new Date(props.uploadDate).toDateString()}
                </p>
            </div>
            <div className="item-action-content">
                {props.isApproved === "approved" && !props.paymentMade && (
                    <Link className="pay" to={`publication/pay/${props._id}`}>
                        Pay
                    </Link>
                )}
                <Link to={{ pathname: props.content }} target="blank">
                    Download
                </Link>
            </div>
        </div>
    );
};

export default PublicationCard;
