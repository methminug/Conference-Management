import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  sessionSectionTitle: {
    color:"#ffffff",
    marginBottom: "35px"
  },
  speakerImage: {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    marginRight: "20px",
    objectFit: "cover",
  },
  speakerDesc: {
    fontSize: "15px",
  },
});
