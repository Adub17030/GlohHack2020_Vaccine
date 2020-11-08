import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function DataList(props) {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="contacts">
      
      <ListItem button>
        <ListItemIcon>
          <PriorityHighIcon />
        </ListItemIcon>
        <ListItemText primary={"Temperature: " + parseInt(props.temp)} />
      </ListItem>

      <ListItem button>
        <ListItemText inset primary={"Location: " + props.locations} />
      </ListItem>

      <ListItem button>
        <ListItemText inset primary={"Inventory: " + parseInt(props.inventory) + "Vaccines"} />
      </ListItem>

       <ListItem button>
        <ListItemText inset primary={"Provider: " + props.provider} />
      </ListItem>

    </List>
  );
}