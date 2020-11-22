import { Container, Button, Typography, TextField } from "@material-ui/core";
import React from "react";
import style from "./styles";
export default function Auth(props) {
  let classes = style();

  return (
    <Container className={classes.root} maxWidth="sm">
      <Typography variant="h2">{props.title}</Typography>
      <form className={classes.form}>
        <TextField
          className={classes.Input}
          id="name"
          label="Name"
          fullWidth
          variant="outlined"
        />
        <TextField
          className={classes.Input}
          id="username"
          label="Username"
          fullWidth
          variant="outlined"
        />
        <Button style={{ marginTop: "24px" }} elevation="0" variant="contained">
          {props.title}
        </Button>
      </form>
    </Container>
  );
}
