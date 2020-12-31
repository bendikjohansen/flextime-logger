import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },

  contentContainer: {
    flexGrow: 1,
  },

  bottomNavigation: {
    justifyContent: "flex-end",
  },

  bottomAction: {
    paddingBottom: '20px'
  }
});

export default useStyles;
