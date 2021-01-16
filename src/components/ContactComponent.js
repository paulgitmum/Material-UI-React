import React from "react";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";

function ContactComponent() {
  const [text, setText] = React.useState("");

  const handleText = (e) => {
    e.preventDefault();
    let input = e.target.value;
    setText(input);
  };
  return (
    <div>
      <h1>Contact Component</h1>
      <div>
        <form>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            onChange={handleText}
          />{" "}
        </form>
        <Checkbox
      
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <p>Checkbox</p>
       <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Avatar alt="Remy Sharp" style={{margin:'auto'}} src="/static/images/avatar/1.jpg"/>
        <h2>{text}</h2>
      </div>
    </div>
  );
}

export default ContactComponent;
