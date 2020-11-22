import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "24px"
  },
  form: {
    marginTop: "24px",
    textAlign: "right"
  },
  Input: {
    "&:not(:first-child)": {
      marginTop: "8px"
    }
  }
}));
export default useStyles;
