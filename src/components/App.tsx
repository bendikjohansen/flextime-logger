import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import ListIcon from '@material-ui/icons/List';
import React from "react";

interface Props {
  children: JSX.Element;
  listOnClick: () => void;
  addOnClick: () => void;
  editOnClick: () => void;
}

const useStyles = makeStyles({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: 'column'
  },

  contentContainer: {
    flexGrow: 1,
  },

  bottomNavigation: {
    justifyContent: "flex-end",
  },
});

const App = ({ children, listOnClick, addOnClick, editOnClick }: Props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root} padding={2} paddingBottom={0}>
      <Container className={classes.contentContainer}>
        {children}
      </Container>
      <BottomNavigation className={classes.bottomNavigation}>
        <BottomNavigationAction onClick={listOnClick} label="List entries" icon={<ListIcon />} />
        <BottomNavigationAction onClick={addOnClick} label="Add entry" icon={<AddIcon />} />
        <BottomNavigationAction onClick={editOnClick} label="Edit baseline" icon={<EditIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default App;
