import React from "react";
import { Typography, Button } from "@material-ui/core";
import { BookOutlined, SlideshowOutlined } from "@material-ui/icons";

import { RESEARCH_PAPER_TEMPLATE_URL, WORKSHOP_TEMPLATE_URL } from "./ConferenceDownloadsURLs";

const ConferenceDownloadsSection = () => {
  return (
    <div
      style={{
        paddingTop: "50px",
        paddingBottom: "50px",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "20px",
        }}
      >
        <Typography variant="h3">Conference Templates</Typography>
        <Button
        href={RESEARCH_PAPER_TEMPLATE_URL}
          variant="contained"
          color="primary"
          size="large"
          startIcon={<BookOutlined style={{ fontSize: "60px" }} />}
        >
          Download Reasearch Paper template
        </Button>
        <Button
          href={WORKSHOP_TEMPLATE_URL}
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<SlideshowOutlined style={{ fontSize: "60px" }} />}
        >
          Download Workshop Proposal template
        </Button>
      </div>
    </div>
  );
};

export default ConferenceDownloadsSection;
