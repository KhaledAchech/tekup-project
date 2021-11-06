import React from "react";
import { Dialog, DialogContent, makeStyles, Theme, Typography } from "@material-ui/core";
import tekup from '../../images/tekupLogo.png'
import Paper from '@mui/material/Paper';
import { typography } from "@mui/system";
import Title from "./Title";
const useStyles = makeStyles(() => ({
  backDrop: {
    backdropFilter: "blur(3px)",
    backgroundColor:'rgba(0,0,30,0.2)'
  },
}));

export default function TekupLogo() {
  const classes = useStyles();
  return (
    <Dialog
      open={true}
      BackdropProps={{
        classes: {
          root: classes.backDrop,
        },
      }}
      onClose={() => {}}
    >
      <DialogContent style={{ textAlign: "center"}}>
         <div style = {{ backgroundImage :  `url(${tekup})`, backgroundPosition: 'center',  backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',  width: '30vw', height: '25vh'}}>
                         

         </div>
          <div>
            <Title></Title>
          </div>
      </DialogContent>
    </Dialog>
  );
}