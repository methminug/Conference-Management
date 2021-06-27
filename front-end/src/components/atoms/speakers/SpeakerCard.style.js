import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  speakerSectionTitle: {
    color:"#ffffff",
    textAlign: "center",
    marginBottom: "35px"
  },
  speakerDesc: { color: "#ffffff", textAlign: "center", fontSize:"14px" },
  speakerImage: {
    height: "160px",
    width: "160px",
    borderRadius: "50%",
    objectFit: "cover",
    display: "block",
    margin: "auto",
  },
});
