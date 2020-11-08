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
import { shadows } from '@material-ui/system';
import BarChart from '../DashParts/BarChart.js'
import ShadeChart from '../DashParts/AreaChart.js'
import Divider from '@material-ui/core/Divider';
import LinearProgressing from '../DashParts/ProgressBar.js'
import DataList from '../DashParts/DataList.js'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore'


const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

const useStyles = makeStyles((darkTheme) => ({
    root: {
      
    },
    paper: {
      padding: darkTheme.spacing(2),
      margin: darkTheme.spacing(5),
      textAlign: 'left',
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
     <Grid container spacing={0}>
        <Grid item xs={12}>
        <ThemeProvider theme={darkTheme}>
          <Paper className={classes.paper}>
          <Typography variant="h2" component="h2">Vaccine Shipments</Typography>
          <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>V-Track 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <DataList temp="-30" provider="AstraXeneca" locations="Storrs, CT" inventory="15000"/>
        </AccordionDetails>
      </Accordion>


          <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>V-Track 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <DataList temp="-45" provider="AstraXeneca" locations="NYC, NY" inventory="55000"/>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>V-Track 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <DataList temp="-25" provider="Johnson and Johnson" locations="Atlanta, GA" inventory="35000"/>
        </AccordionDetails>
      </Accordion>

      

      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className={classes.heading}>V-Track 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <DataList temp="-35" provider="Johnson and Johnson" locations="Los Angeles, CA" inventory="45000"/>
        </AccordionDetails>
      </Accordion>

      <Accordion disabled>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Data Incoming</Typography>
        </AccordionSummary>
      </Accordion>
          </Paper>
        </ThemeProvider>
        </Grid>

        <Grid item xs={4}>
        <ThemeProvider theme={darkTheme}>
        <Paper boxShadow={5} className={classes.paper}>
        <ShadeChart></ShadeChart>
        <Divider variant="middle" />
        <Typography variant="overline text">Shipment Progress: <LinearProgressing initial="40" /> </Typography>
        </Paper>
        </ThemeProvider>
        </Grid>

         <Grid item xs={4}>
        <ThemeProvider theme={darkTheme}>
        <Paper boxShadow={5} className={classes.paper}>
        <ShadeChart></ShadeChart>
        <Divider variant="middle" />
        <Typography variant="overline text">Shipment Progress: <LinearProgressing initial="70" /> </Typography>
        </Paper>
        </ThemeProvider>
        </Grid>

         <Grid item xs={4}>
        <ThemeProvider theme={darkTheme}>
        <Paper boxShadow={5} className={classes.paper}>
        <ShadeChart></ShadeChart>
        <Divider variant="middle" />
        <Typography variant="overline text">Shipment Progress: <LinearProgressing initial="10" /> </Typography>
        </Paper>
        </ThemeProvider>
        </Grid>        


    </Grid>
    </div>
    </main>
 
  )
}


// Each one will have a header, a chart, view more button, and progress bar and shadows.