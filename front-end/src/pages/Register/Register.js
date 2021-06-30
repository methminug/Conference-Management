import React, { useEffect, useState } from "react";
import axios from "axios";

import UserDetails from "./UserDetails";
import Ticket from "./Ticket";
import ConferenceSubmission from "./ConferenceSubmission";
import { useStyles } from "./Register.style";

const Register = () => {
  const classes = useStyles();

  const initialForm = {
    email: "",
    password: "",
    name: "",
    contactNumber: "",
    userType: "Researcher",
    uploadTitle: "",
    upload: "",
    step: 1,
  };

  const [formDetails, setFormDetails] = useState(initialForm);

  const nextStep = () => {
    if (formDetails.step === 1) {
      if (formDetails.userType === "Attendee") {
        setFormDetails((current) => {
          return {
            ...current,
            step: 2,
          };
        });
      } else {
        setFormDetails((current) => {
          return {
            ...current,
            step: 3,
          };
        });
      }
    } else {
      setFormDetails((current) => {
        return {
          ...current,
          step: 4,
        };
      });
    }
  };

  const prevStep = () => {
    setFormDetails((current) => {
      return {
        ...current,
        step: 1,
      };
    });
  };

  const handleChange = (e) => {
    setFormDetails((currentdetails) => {
      return {
        ...currentdetails,
        [e.target.id]: e.target.value,
      };
    });
  };

  const handleFileUpload = (e) => {
    setFormDetails((currentdetails) => {
      return {
        ...currentdetails,
        [e.target.id]: e.target.files[0],
      };
    });
  };

  const setUserType = (type) => {
    setFormDetails((info) => {
        return{
            ...info,
            userType : type,
        };
    });
  }

  switch (formDetails.step) {
    case 1:
      return (
        <div style={{ backgroundColor: "#253d60", height: "561px" }}>
          <UserDetails
            nextStep={nextStep}
            handleChange={handleChange}
            details={formDetails}
            setUserType={setUserType}
          />
        </div>
      );
    case 2:
      return (
        <div style={{ backgroundColor: "#253d60", height: "561px" }}>
          <Ticket
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            details={formDetails}
          />
        </div>
      );
    case 3:
      return (
        <div style={{ backgroundColor: "#253d60", height: "561px" }}>
          <ConferenceSubmission
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            handleFileUpload={handleFileUpload}
            details={formDetails}
          />
        </div>
      );
    case 4:
      return (
        <div>
          <h1>Success!</h1>
        </div>
      );
  }
};

export default Register;
