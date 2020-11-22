import { createMuiTheme } from "@material-ui/core";

const Theme = createMuiTheme({
  palette: {},
  typography: {
    subtitle1: {
      fontSize: "24px"
    },
    body1: {
      fontSize: "13px",
      lineHeight: "1.5em"
    }
  },
  spacing: 8
});

export default Theme;
