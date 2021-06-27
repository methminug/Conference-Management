import React from "react";
import { Modal, Backdrop, Fade, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { LinkedIn } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  modal: {
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    display: "block",
    margin: "60px auto",
  },
  textPrimary: { color: "#ffffff" },
  textSecondnary: { color: "#f9564f" },
  paper: {
    backgroundColor: "#1c2a45",
    outline: "none",
    borderRadius:"15px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  speakerName: {
    margin: "0px",
    color: "#f9564f",
    textAlign: "center",
    fontSize: "18px",
    cursor: "pointer",
  },
  socialIcon: { color: "#ffffff", fontSize: "35px", cursor: "pointer" },
}));


const SpeakerInfoModal = ({
  speakerName,
  speakerPosition,
  speakerCompany,
  speakerDesc,
  speakerLinkedIn
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const redirectSocialPage = () =>{
    window.open(speakerLinkedIn)
};

  return (
    <div>
      <p className={classes.speakerName} onClick={handleOpen}>
        {speakerName}
      </p>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography
              className={classes.textPrimary}
              variant="h3"
              id="transition-modal-title"
            >
              {speakerName}
            </Typography>
            <div id="transition-modal-description">
              <Typography variant="h5" className={classes.textPrimary}>
                {speakerPosition}
              </Typography>
              <Typography variant="h5" className={classes.textSecondnary}>
                {speakerCompany}
              </Typography>
              <Typography
                className={classes.textPrimary}
                style={{ margin: "20px 0px 30px 0px" }}
              >
                {speakerDesc}
              </Typography>
            </div>
            <LinkedIn onClick={redirectSocialPage} className={classes.socialIcon} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default SpeakerInfoModal;
