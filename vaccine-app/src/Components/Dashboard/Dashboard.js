import React from "react";

// import InfoPanel from "./panels/InfoPanel";
// import AllocationPanel from "./panels/AllocationPanel";
// import PerformancePanel from "./panels/PerformancePanel";
// import PositionsPanel from "./panels/PositionsPanel";
import './Dashboard.css'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore'


const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

const useStyles = makeStyles((darkTheme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: darkTheme.spacing(10),
      margin: darkTheme.spacing(5),
      textAlign: 'center',
      color: darkTheme.palette.background.paper,
    },
    heading: {
        fontSize: darkTheme.typography.pxToRem(15),
        fontWeight: darkTheme.typography.fontWeightRegular,
      },
  }));


export default function Dashboard() {
    const classes = useStyles();
  return (
    <main className="dash-main">
    <div className={classes.root}>
     <Grid container spacing={3}>
        <Grid item xs={12}>
        <ThemeProvider theme={darkTheme}>
          <Paper className={classes.paper}>
          
          <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Vaccine Tracker 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Vaccine Tracker 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Location: Hartford</Typography>
          <Typography>Temperature: 78.56 F</Typography>
          <Typography>Status: Online</Typography>
          <Typography>: Hartford</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
          </Paper>
        </ThemeProvider>
        </Grid>

        <Grid item xs={4}>
        <ThemeProvider theme={darkTheme}>
        <Paper className={classes.paper}></Paper>
        </ThemeProvider>
        </Grid>

    </Grid>
    </div>
    </main>
 
  )
}


