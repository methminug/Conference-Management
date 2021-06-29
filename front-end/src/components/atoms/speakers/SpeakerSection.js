import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { useStyles } from "./SpeakerCard.style";

import SpeakerCard from "./SpeakerCard";

const SpeakerSection = ({speakers}) => {
  const classes = useStyles();

  return (
    <div
      style={{
        paddingTop: "50px",
        paddingBottom: "50px",
        backgroundColor: "#1c2a45",
      }}
    >

      <Grid container>
        {Object.values(speakers).map(({ name, speakerImage, description, designation, placeOfWork, linkedInProfile }) => (
          <SpeakerCard
            name={name}
            position={designation}
            company={placeOfWork}
            image={speakerImage}
            description={description}
            linkedInURL={linkedInProfile}
          />
        ))}
      </Grid>
    </div>
  );
};

export default SpeakerSection;

// const speakerImage = "https://firebasestorage.googleapis.com/v0/b/conference-management-ap-865db.appspot.com/o/Nayomi%20Perera.jpeg?alt=media&token=b6c00537-821a-4443-94d1-20d69925501c"
// const linkedInURL = "https://linkedin.com/in/methmi-nugawela"
// const speakerDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing bibendum est ultricies integer. Libero justo laoreet sit amet. Enim sed faucibus turpis in eu mi bibendum neque. Tortor condimentum lacinia quis vel eros donec ac. Arcu non sodales neque sodales ut etiam sit amet nisl. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Mauris augue neque gravida in fermentum. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. Tellus mauris a diam maecenas sed."
// const speakers = [
//   {
//     name: "Daphne Koller",
//     position: "CEO",
//     company: "Insitro",
//     img: "https://firebasestorage.googleapis.com/v0/b/conference-management-ap-865db.appspot.com/o/Nayomi%20Perera.jpeg?alt=media&token=b6c00537-821a-4443-94d1-20d69925501c",
//   },
//   {
//     name: "Lex Fridman",
//     position: "Researcher",
//     company: "MIT",
//     img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
//   },
//   {
//     name: "Daphne Koller",
//     position: "CEO",
//     company: "Insitro",
//     img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
//   },
//   {
//     name: "Lex Fridman",
//     position: "Researcher",
//     company: "MIT",
//     img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
//   },
//   {
//     name: "Daphne Koller",
//     position: "CEO",
//     company: "Insitro",
//     img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
//   },
//   {
//     name: "Lex Fridman",
//     position: "Researcher",
//     company: "MIT",
//     img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
//   },
//   {
//     name: "Daphne Koller",
//     position: "CEO",
//     company: "Insitro",
//     img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
//   },
//   {
//     name: "Lex Fridman",
//     position: "Researcher",
//     company: "MIT",
//     img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
//   },
// ];
