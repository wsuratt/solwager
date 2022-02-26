import { useEffect, useState } from 'react';
import {
  CircularProgress,
  Snackbar,
  makeStyles,
  Button,
  Box,
  Typography,
} from '@material-ui/core';

const Home = () => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <Typography className={classes.title}>SOL</Typography>
      <Typography className={classes.title2}>WAGER</Typography>
      <div className={classes.center}>
        <Box sx={{ width: 500, marginTop: 5, p: 2, border: '1px solid white' }}>
          <Typography className={classes.text}>Skill-based game wagering platform built on Solana</Typography>
        </Box>
      </div>
      <Typography className={classes.text2}>coming soon...</Typography>
    </main>
  )
};
const useStyles = makeStyles({
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    textAlign: "center",
    background: "black",
  },
  text: {
    color: "white",
    fontSize: "25px",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Verdana",
  },
  text2: {
    color: "white",
    marginTop: "25px",
    fontSize: "15px",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Verdana",
  },
  title: {
    color: "#512da8",
    display: "inline",
    marginTop: "25px",
    fontSize: "50px",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Verdana",
  },
  title2: {
    color: "white",
    display: "inline",
    marginTop: "25px",
    fontSize: "50px",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Verdana",
  },
}, { index: 1 });
export default Home;
